const nexmoApiKey = 'df2676ae';
const nexmoApiSecret = '74317485e0ae7ec7';

function populateOrderList(orders) {
  console.log(orders);
  var orderListNode = document.getElementById("orderList");

  for (order in orders) {
    var newOrderDiv = document.createElement("div");
    newOrderDiv.setAttribute("class", "order");
    newOrderHTML = "";
    newOrderHTML += "<b>Name</b>: " + orders[order]['name'];
    newOrderHTML += "<br><b>Phone Number</b>: " + orders[order]['phoneNum'];
    newOrderHTML += "<br><b>Bread</b>: " + orders[order]['bread'];
    newOrderHTML += "<br><b>Meats</b>: " + orders[order]['meats'];
    newOrderHTML += "<br><b>Cheeses</b>: " + orders[order]['cheeses'];
    newOrderHTML += "<br><b>Veggies</b>: " + orders[order]['veggies'];
    newOrderHTML += "<br><b>Sauces</b>: " + orders[order]['sauces'];
    newOrderDiv.innerHTML = newOrderHTML;

    var newSmsButton = document.createElement("button");
    newSmsButton.onclick = function() {
      axios.get(`http://54.200.82.249:3000/notifyStudent/${orders[order]['phoneNum']}`)
        .then(function (response) {/*
          axios.delete(`http://54.200.82.249:3000/order/${orders[order]['id']}`)
            .then(function(response) {
              console.log(response);
              return true;
            })
            .catch(function(error) {
              console.log(error);
              return false;
            })
          }*/
          console.log(response);
          return true;
        })
        .catch(function (error) {
          console.log(error);
          return false;
        });
    }
    newSmsButton.innerHTML = ("Notify " + orders[order]['name']);
    newOrderDiv.appendChild(document.createElement("br"));
    newOrderDiv.appendChild(newSmsButton);
    orderListNode.appendChild(newOrderDiv);
    orderListNode.appendChild(document.createElement("br"));
  }
}

function onLoad() {
  axios.get("http://54.200.82.249:3000/orders")
    .then(function (response) {
      populateOrderList(response['data']);
      return true;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
}

window.addEventListener("load", onLoad, false);
