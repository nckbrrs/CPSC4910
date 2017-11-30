function populateNameNumDiv() {
  var reviewNameNumNode = document.getElementById("reviewnameNumDiv");

  var nameNumHTML = "<br>";
  nameNumHTML += "<b>Name</b>: ";
  nameNumHTML += name;

  nameNumHTML += "<br>";
  nameNumHTML += phoneNum;
}

function populateReviewDiv() {
  var reviewSandwichNode = document.getElementById("reviewSandwichDiv");

  var sandwichAsHTML = "<br>";
  sandwichAsHTML += "<b>Bread</b>: ";
  sandwichAsHTML += (sandwich['bread'] + "<br>");

  sandwichAsHTML += "<b>Meats</b>: ";
  for (meat in sandwich['meats']) {
    sandwichAsHTML += (sandwich['meats'][meat] + ", ");
  }
  sandwichAsHTML = sandwichAsHTML.replace(/,\s*$/, "");
  sandwichAsHTML += "<br>";

  sandwichAsHTML += "<b>Cheeses</b>: ";
  for (cheese in sandwich['cheeses']) {
    sandwichAsHTML += (sandwich['cheeses'][cheese] + ", ");
  }
  sandwichAsHTML = sandwichAsHTML.replace(/,\s*$/, "");
  sandwichAsHTML += "<br>";

  sandwichAsHTML += "<b>Veggies</b>: ";
  for (veggie in sandwich['veggies']) {
    sandwichAsHTML += (sandwich['veggies'][veggie] + ", ");
  }
  sandwichAsHTML = sandwichAsHTML.replace(/,\s*$/, "");
  sandwichAsHTML += "<br>";

  sandwichAsHTML += "<b>Sauces</b>: ";
  for (sauce in sandwich['sauces']) {
    sandwichAsHTML += (sandwich['sauces'][sauce] + ", ");
  }
  sandwichAsHTML = sandwichAsHTML.replace(/,\s*$/, "");
  sandwichAsHTML += "<br><br>";

  reviewSandwichNode.innerHTML = sandwichAsHTML;
}

function onLoad() {
  populateNameNumDiv();
  populateReviewDiv();
}

window.addEventListener("load", onLoad, false);
