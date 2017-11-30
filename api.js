var express = require('express');
var redis = require('redis');
var bluebird = require('bluebird');
var bodyParser = require('body-parser');

/* Bluebird setup */
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

/* Express setup */
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

/* Redis setup */
var client = redis.createClient();
client.on('error', function(err) {
  console.log('Error in redis client.on ' + err);
});

app.listen(3002, function() {
  console.log('Server listening on port 3002!');
});

app.get('/', function(req, res) {
  console.log("got a GET request");
  res.send("hello world");
});
/*
app.post('/orders', function(req, res) {
  console.log("got a new order!");
  var sandwichObj = req.body;

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
          res.status(200).json(gradeObj);
          return;
        });
    });
  }
});
*/
