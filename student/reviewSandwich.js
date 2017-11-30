var redisSandwich = {};

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

function populateRedisSandwich() {
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

  redisSandwich['bread'] = sandwich['bread'];
  redisSandwich['meats'] = meatsArrayAsString;
  redisSandwich['cheeses'] = cheesesArrayAsString;
  redisSandwich['veggies'] = veggiesArrayAsString;
  redisSandwich['sauces'] = saucesArrayAsString;
}

function confirmOrderOnSubmit() {

  console.log("posting with param of ", JSON.stringify(redisSandwich));

  axios.post("http://54.200.82.249:3000/orders", {
      sandwich: redisSandwich
    })
    .then(function (response) {
      console.log(response);
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

/*
  var formNode = document.getElementById("reviewOrderForm");
  formNode.onsubmit = confirmOrderOnSubmit;
*/
  var buttonNode = document.getElementById("reviewOrderSubmit");
  buttonNode.onclick = confirmOrderOnSubmit;

  return true;
}

window.addEventListener("load", onLoad, false);
