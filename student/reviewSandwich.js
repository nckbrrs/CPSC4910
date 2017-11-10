function onLoad() {
  var reviewSandwichNode = document.getElementById("reviewSandwichDiv");

  var sandwichAsHTML = "";
  sandwichAsHTML += "<b>Bread</b>: ";
  sandwichAsHTML += (sandwich['bread'] + "<br>");

  sandwichAsHTML += "<b>Meats</b>: ";
  for (meat in currentSandwich['meats']) {
    sandwichAsHTML += (sandwich['meats'][meat] + ", ");
  }
  sandwichAsHTML = sandwichAsHTML.replace(/,\s*$/, "");
  sandwichAsHTML += "<br>";

  sandwichAsHTML += "<b>Cheeses</b>: ";
  for (cheese in currentSandwich['cheeses']) {
    sandwichAsHTML += (sandwich['cheeses'][cheese] + ", ");
  }
  sandwichAsHTML = sandwichAsHTML.replace(/,\s*$/, "");
  sandwichAsHTML += "<br>";

  sandwichAsHTML += "<b>Veggies</b>: ";
  for (veggie in currentSandwich['veggies']) {
    sandwichAsHTML += (sandwich['veggies'][veggie] + ", ");
  }
  sandwichAsHTML = sandwichAsHTML.replace(/,\s*$/, "");
  sandwichAsHTML += "<br>";

  sandwichAsHTML += "<b>Sauces</b>: ";
  for (sauce in currentSandwich['sauces']) {
    sandwichAsHTML += (sandwich['sauces'][sauce] + ", ");
  }
  sandwichAsHTML = sandwichAsHTML.replace(/,\s*$/, "");
  sandwichAsHTML += "<br>";
}

window.addEventListener("load", onLoad, false);
