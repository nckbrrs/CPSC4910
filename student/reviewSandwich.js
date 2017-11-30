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
    sandwichHTML += (sandwich['bread'] + "<br>");
  }
  
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

function confirmOrderOnSubmit() {
  // REDIS STUFF HERE
}

function onLoad() {
  populateNameNumDiv();
  populateReviewDiv();

  var formNode = document.getElementById("reviewOrderForm");
  formNode.onSubmit = confirmOrderOnSubmit;
}

window.addEventListener("load", onLoad, false);
