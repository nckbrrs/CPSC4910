function updatePreview(sandwich) {
  var previewSandwichNode = document.getElementById("previewSandwichDiv");
  var sandwichAsHTML = "";
  sandwichAsHTML += "<u>Bread</u><br>";
  sandwichAsHTML += ("<ul><li>" + sandwich['bread'] + "</li></ul><br>");

  sandwichAsHTML += "<u>Meats</u><br>";
  sandwichAsHTML += "<ul>";
  for (meat in sandwich['meats']) {
    sandwichAsHTML += ("<li>" + sandwich['meats'][meat] + "</li><br>");
  }
  sandwichAsHTML += "</ul><br>";

  sandwichAsHTML += "<u>Cheeses</u><br>";
  sandwichAsHTML += "<ul>";
  for (cheese in sandwich['cheeses']) {
    sandwichAsHTML += ("<li>" + sandwich['cheeses'][cheese] + "</li><br>");
  }
  sandwichAsHTML += "</ul><br>";

  sandwichAsHTML += "<u>Veggies</u><br>";
  sandwichAsHTML += "<ul>";
  for (veggie in sandwich['veggies']) {
    sandwichAsHTML += ("<li>" + sandwich['veggies'][veggie] + "</li><br>");
  }
  sandwichAsHTML += "</ul><br>";

  sandwichAsHTML += "<u>Sauces</u><br>";
  sandwichAsHTML += "<ul>";
  for (sauce in sandwich['sauces']) {
    sandwichAsHTML += ("<li>" + sandwich['sauces'][sauce] + "</li><br>");
  }
  sandwichAsHTML += "</ul><br>";

  previewSandwichNode.innerHTML = sandwichAsHTML;
}

function buildSandwichOnSubmit() {
  console.log("hi");
}

function onLoad() {

  var currentSandwich = {
    bread: "",
    meats: [],
    cheeses: [],
    veggies: [],
    sauces: []
  };

  updatePreview(currentSandwich);

  var breadInputs = document.getElementById("chooseBread").getElementsByTagName("input");
  for (bread in breadInputs) {
    breadInputs[bread].onclick = function() {
      if (this.checked) {
        currentSandwich['bread'] = this.value;
      } else {
        currentSandwich['bread'] = "";
      }
      updatePreview(currentSandwich);
    }
  }

  var meatInputs = document.getElementById("chooseMeats").getElementsByTagName("input");
  for (meat in meatInputs) {
    meatInputs[meat].onclick = function() {
      if (this.checked) {
        currentSandwich['meats'].push(this.value);
      } else {
        let index = currentSandwich['meats'].indexOf(this.value);
        if (index > -1) {
          currentSandwich['meats'].splice(index, 1);
        }
      }
      updatePreview(currentSandwich);
    }
  }

  var cheeseInputs = document.getElementById("chooseCheeses").getElementsByTagName("input");
  for (cheese in cheeseInputs) {
    cheeseInputs[cheese].onclick = function() {
      if (this.checked) {
        currentSandwich['cheeses'].push(this.value);
      } else {
        let index = currentSandwich['cheeses'].indexOf(this.value);
        if (index > -1) {
          currentSandwich['cheeses'].splice(index, 1);
        }
      }
      updatePreview(currentSandwich);
    }
  }

  var veggieInputs = document.getElementById("chooseVeggies").getElementsByTagName("input");
  for (veggie in veggieInputs) {
    veggieInputs[veggie].onclick = function() {
      if (this.checked) {
        currentSandwich['veggies'].push(this.value);
      } else {
        let index = currentSandwich['veggies'].indexOf(this.value);
        if (index > -1) {
          currentSandwich['veggies'].splice(index, 1);
        }
      }
      updatePreview(currentSandwich);
    }
  }

  var sauceInputs = document.getElementById("chooseSauces").getElementsByTagName("input");
  for (sauce in sauceInputs) {
    sauceInputs[sauce].onclick = function() {
      if (this.checked) {
        currentSandwich['sauces'].push(this.value);
      } else {
        let index = currentSandwich['sauces'].indexOf(this.value);
        if (index > -1) {
          currentSandwich['sauces'].splice(index, 1);
        }
      }
      updatePreview(currentSandwich);
    }
  }
};

window.addEventListener("load", onLoad, false);
