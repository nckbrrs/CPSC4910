function populateNameNumDiv() {
  var reviewNameNumNode = document.getElementById("reviewNameNumDiv");

  var nameNumHTML = "<br>";
  nameNumHTML += ("<b>Name</b>: " + name + "<br>");
  nameNumHTML += ("<b>Phone Number</b>: " + phoneNum + "<br>");

  reviewNameNumNode.innerHTML = nameNumHTML;
}

function populateReviewDiv() {
  var reviewSandwichNode = document.getElementById("reviewSandwichDiv");

  var sandwichHTML = "<br>";
  sandwichHTML += "<b>Bread</b>: ";
  sandwichHTML += (sandwich['bread'] + "<br>");

  sandwichHTML += "<b>Meats</b>: ";
  for (meat in sandwich['meats']) {
    sandwichHTML += (sandwich['meats'][meat] + ", ");
  }
  sandwichHTML = sandwichHTML.replace(/,\s*$/, "");
  sandwichHTML += "<br>";

  sandwichHTML += "<b>Cheeses</b>: ";
  for (cheese in sandwich['cheeses']) {
    sandwichHTML += (sandwich['cheeses'][cheese] + ", ");
  }
  sandwichHTML = sandwichHTML.replace(/,\s*$/, "");
  sandwichHTML += "<br>";

  sandwichHTML += "<b>Veggies</b>: ";
  for (veggie in sandwich['veggies']) {
    sandwichHTML += (sandwich['veggies'][veggie] + ", ");
  }
  sandwichHTML = sandwichHTML.replace(/,\s*$/, "");
  sandwichHTML += "<br>";

  sandwichHTML += "<b>Sauces</b>: ";
  for (sauce in sandwich['sauces']) {
    sandwichHTML += (sandwich['sauces'][sauce] + ", ");
  }
  sandwichHTML = sandwichHTML.replace(/,\s*$/, "");
  sandwichHTML += "<br><br>";

  reviewSandwichNode.innerHTML = sandwichHTML;
}

function onLoad() {
  populateNameNumDiv();
  populateReviewDiv();
}

window.addEventListener("load", onLoad, false);
