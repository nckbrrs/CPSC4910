function populateNameNumDiv() {
  var reviewNameNumNode = document.getElementById("reviewNameNumDiv");

  var nameNumHTML = "<br>";
  nameNumHTML += ("<b>Name</b>: " + name + "<br>");
  nameNumHTML += ("<b>Phone Number</b>: " + phoneNum + "<br><br>");

  reviewNameNumNode.innerHTML = nameNumHTML;
}

function populateReviewDiv() {
  var reviewSandwichNode = document.getElementById("reviewSandwichDiv");

  var sandwichHTML = "<br>";
  sandwichHTML += "<b>Bread</b>: ";
  if (sandwich['bread'] == null) {
    sandwichHTML += "none";
  } else {
    sandwichHTML += (sandwich['bread']);
  }
  sandwichHTML += "<br>";

  sandwichHTML += "<b>Meats</b>: ";
  if (sandwich['meats'] == null) {
    sandwichHTML += "none";
  } else {
    for (meat in sandwich['meats']) {
      sandwichHTML += (sandwich['meats'][meat] + ", ");
    }
  }
  sandwichHTML = sandwichHTML.replace(/,\s*$/, "");
  sandwichHTML += "<br>";

  sandwichHTML += "<b>Cheeses</b>: ";
  if (sandwich['cheeses'] == null) {
    sandwichHTML += "none"
  } else {
    for (cheese in sandwich['cheeses']) {
      sandwichHTML += (sandwich['cheeses'][cheese] + ", ");
    }
  }
  sandwichHTML = sandwichHTML.replace(/,\s*$/, "");
  sandwichHTML += "<br>";

  sandwichHTML += "<b>Veggies</b>: ";
  if (sandwich['veggies'] == null) {
    sandwichHTML += "none"
  } else {
    for (veggie in sandwich['veggies']) {
      sandwichHTML += (sandwich['veggies'][veggie] + ", ");
    }
  }
  sandwichHTML = sandwichHTML.replace(/,\s*$/, "");
  sandwichHTML += "<br>";

  sandwichHTML += "<b>Sauces</b>: ";
  if (sandwich['sauces'] == null) {
    sandwichHTML += "none"
  } else {
    for (sauce in sandwich['sauces']) {
      sandwichHTML += (sandwich['sauces'][sauce] + ", ");
    }
  }
  sandwichHTML = sandwichHTML.replace(/,\s*$/, "");
  sandwichHTML += "<br><br>";

  reviewSandwichNode.innerHTML = sandwichHTML;
}

function populateOrder() {
  var myOrder = {};

  var meatsArrayAsString = "";
  if (sandwich['meats'] == null) {
    meatsArrayAsString += "none";
  } else {
    for (meat in sandwich['meats']) {
      meatsArrayAsString += (sandwich['meats'][meat] + ", ");
    }
  }
  meatsArrayAsString = meatsArrayAsString.replace(/,\s*$/, "");

  var cheesesArrayAsString = "";
  if (sandwich['cheeses'] == null) {
    cheesesArrayAsString += "none"
  } else {
    for (cheese in sandwich['cheeses']) {
      cheesesArrayAsString += (sandwich['cheeses'][cheese] + ", ");
    }
  }
  cheesesArrayAsString = cheesesArrayAsString.replace(/,\s*$/, "");

  var veggiesArrayAsString = "";
  if (sandwich['veggies'] == null) {
    veggiesArrayAsString += "none"
  } else {
    for (veggie in sandwich['veggies']) {
      veggiesArrayAsString += (sandwich['veggies'][veggie] + ", ");
    }
  }
  veggiesArrayAsString = veggiesArrayAsString.replace(/,\s*$/, "");

  var saucesArrayAsString = "";
  if (sandwich['sauces'] == null) {
    saucesArrayAsString += "none"
  } else {
    for (sauce in sandwich['sauces']) {
      saucesArrayAsString += (sandwich['sauces'][sauce] + ", ");
    }
  }
  saucesArrayAsString = saucesArrayAsString.replace(/,\s*$/, "");

  myOrder['bread'] = sandwich['bread'];
  myOrder['meats'] = meatsArrayAsString;
  myOrder['cheeses'] = cheesesArrayAsString;
  myOrder['veggies'] = veggiesArrayAsString;
  myOrder['sauces'] = saucesArrayAsString;
  myOrder['name'] = name;
  myOrder['phoneNum'] = phoneNum;
  return myOrder;
}

function confirmOrderOnSubmit() {

  var order = populateOrder();
  console.log("posting with param of ", JSON.stringify(order));

  axios.post("http://54.200.82.249:3000/orders", {
      order: order
    })
    .then(function (response) {
      console.log(response);
      window.location.replace("/cpsc4910/student/success.php");
      return true;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
}

function onLoad() {
  populateNameNumDiv();
  populateReviewDiv();

  var buttonNode = document.getElementById("reviewOrderSubmit");
  buttonNode.onclick = confirmOrderOnSubmit;

  return true;
}

window.addEventListener("load", onLoad, false);
 
