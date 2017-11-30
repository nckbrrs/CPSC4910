const express = require('express')
const bluebird = require('bluebird')
const redis = require('redis')
const bodyParser = require('body-parser')

bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(function(req, res, next) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, DELETE, POST");
        res.setHeader("Access-Control-Allow-Headers", "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Acesss-Control-Request-Headers");
        next();
})


const client = redis.createClient()
client.on('error', (err) => {
        console.log('Error in redis client.on ' + err);
})

app.get('/', (req, res) => {
        res.send('Hello World!')
})


app.post('/orders', (req, res) => {
        console.log("got a new order!");
        var sandwichObj = req.body['sandwich'];
        console.log("sandwichObj is ", JSON.stringify(sandwichObj));

        if (sandwichObj == null) {
                res.status(400).send('Bad request!');
                return;
        } else {
                var newOrderId = null;
                client.smembersAsync('orders').then(function(orders) {
                        if (orders.length == 0) {
                                newOrderId = 0;
                        } else {
                                newOrderId = parseInt(orders[orders.length-1]) + 1;
                        }
                        sandwichObj['id'] = newOrderId.toString();

                        client.multi()
                                .hmset(`order:${newOrderId}`, sandwichObj)
                                .sadd('orders', `${newOrderId}`)
                                .execAsync().then(function(retval) {
                                        res.status(200).json(sandwichObj);
                                        return;
                                });
                });
        }
})


app.get('/orders', (req, res) => {
        console.log("getting orders!");
        client.smembersAsync('orders').then(function(orders) {
                var gottenOrders = [];
                var currentOrderId = null;
                var totalOrders = orders.length

                for (var i=0; i<orders.length; i++) {
                        currentOrderId = orders[i];
                        gottenOrders.push(client.hgetallAsync(`order:${currentOrderId}`));
                }
                Promise.all(gottenOrders).then(function(listToSend) {
                        res.set('Access-Control-Expose-Headers', 'X-Total-Count');
                        res.set('X-Total-Count', totalOrders);
                        res.status(200).json(listToSend);
                        return;
                });
        });
})

app.listen(3000, () => {
        console.log('Example app listening on port 3000!')
})
