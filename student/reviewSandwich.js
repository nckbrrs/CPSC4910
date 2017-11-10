function onLoad() {
  var reviewSandwichNode = document.getElementById("reviewSandwichDiv");

  var sandwichAsHTML = "";
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
  sandwichAsHTML += "<br>";

  reviewSandwichNode.innerHTML = sandwichAsHTML;
}

window.addEventListener("load", onLoad, false);
