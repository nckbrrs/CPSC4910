function populateOrderList(orders) {
  console.log(orders);
  var orderListNode = document.getElementById("orderList");

  for (order in orders) {
    var newOrderDiv = document.createElement("div");
    newOrderDiv.setAttribute("class", "order");
    newOrderHTML = "";
    newOrderHTML += "<b>Name</b>: " + orders[order]['name'];
    newOrderHTML += "<br><b>Phone Number</b>: " + orders[order]['phoneNum'];

    var sandwichHTML = "<br>";
    sandwichHTML += "<b>Bread</b>: ";
    if (orders[order]['bread'] == null) {
      sandwichHTML += "none";
    } else {
      sandwichHTML += (orders[order]['bread']);
    }
    sandwichHTML += "<br>";

    sandwichHTML += "<b>Meats</b>: ";
    if (orders[order]['meats'] == null) {
      sandwichHTML += "none";
    } else {
      for (meat in orders[order]['meats']) {
        sandwichHTML += (orders[order]['meats'][meat] + ", ");
      }
    }
    sandwichHTML = sandwichHTML.replace(/,\s*$/, "");
    sandwichHTML += "<br>";

    sandwichHTML += "<b>Cheeses</b>: ";
    if (orders[order]['cheeses'] == null) {
      sandwichHTML += "none"
    } else {
      for (cheese in orders[order]['cheeses']) {
        sandwichHTML += (orders[order]['cheeses'][cheese] + ", ");
      }
    }
    sandwichHTML = sandwichHTML.replace(/,\s*$/, "");
    sandwichHTML += "<br>";

    sandwichHTML += "<b>Veggies</b>: ";
    if (orders[order]['veggies'] == null) {
      sandwichHTML += "none"
    } else {
      for (veggie in orders[order]['veggies']) {
        sandwichHTML += (orders[order]['veggies'][veggie] + ", ");
      }
    }
    sandwichHTML = sandwichHTML.replace(/,\s*$/, "");
    sandwichHTML += "<br>";

    sandwichHTML += "<b>Sauces</b>: ";
    if (orders[order]['sauces'] == null) {
      sandwichHTML += "none"
    } else {
      for (sauce in orders[order]['sauces']) {
        sandwichHTML += (orders[order]['sauces'][sauce] + ", ");
      }
    }
    sandwichHTML = sandwichHTML.replace(/,\s*$/, "");
    sandwichHTML += "<br><br>";

    newOrderHTML += sandwichHTML;
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
