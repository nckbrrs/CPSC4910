function populateOrderList(orders) {
  console.log(orders);
  var orderListNode = document.getElementById("orderList");

  for (order in orders) {
    var newOrderDiv = document.createElement("div");
    newOrderDiv.setAttribute("class", "order");
    newOrderHTML = "";
    newOrderHTML += "<b>Name</b>: " + orders[order]['name'];
    newOrderHTML += "<b>Phone Number</b>: " + orders[order]['phoneNum'];

    newOrderHTML += "<br>";
    newOrderDiv.innerHTML = newOrderHTML;
    orderListNode.appendChild(newOrderDiv);
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
