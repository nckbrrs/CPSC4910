var currentSandwich;

function updatePreview() {
  var previewSandwichNode = document.getElementById("previewSandwichDiv");
  var sandwichAsHTML = "";
  sandwichAsHTML += "<b>Bread</b>: ";
  sandwichAsHTML += (currentSandwich['bread'] + "<br>");

  sandwichAsHTML += "<b>Meats</b>: ";
  for (meat in currentSandwich['meats']) {
    sandwichAsHTML += (currentSandwich['meats'][meat] + ", ");
  }
  sandwichAsHTML = sandwichAsHTML.replace(/,\s*$/, "");
  sandwichAsHTML += "<br>";

  sandwichAsHTML += "<b>Cheeses</b>: ";
  for (cheese in currentSandwich['cheeses']) {
    sandwichAsHTML += (currentSandwich['cheeses'][cheese] + ", ");
  }
  sandwichAsHTML = sandwichAsHTML.replace(/,\s*$/, "");
  sandwichAsHTML += "<br>";

  sandwichAsHTML += "<b>Veggies</b>: ";
  for (veggie in currentSandwich['veggies']) {
    sandwichAsHTML += (currentSandwich['veggies'][veggie] + ", ");
  }
  sandwichAsHTML = sandwichAsHTML.replace(/,\s*$/, "");
  sandwichAsHTML += "<br>";

  sandwichAsHTML += "<b>Sauces</b>: ";
  for (sauce in currentSandwich['sauces']) {
    sandwichAsHTML += (currentSandwich['sauces'][sauce] + ", ");
  }
  sandwichAsHTML = sandwichAsHTML.replace(/,\s*$/, "");
  sandwichAsHTML += "<br>";

  previewSandwichNode.innerHTML = sandwichAsHTML;
}

function onLoad() {

  currentSandwich = {
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
}

window.addEventListener("load", onLoad, false); 
