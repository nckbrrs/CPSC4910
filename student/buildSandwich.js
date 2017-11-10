function updatePreview(sandwich) {
  var previewSandwichNode = document.getElementById("previewSandwichDiv");
  var sandwichAsHTML = "";
  sandwichAsHTML.concat("<u>Bread</u><br>");
  sandwichAsHTML.concat("<ul><li>", sandwich['bread'], "</li></ul><br>");

  sandwichAsHTML.concat("<u>Meats</u><br>");
  sandwichAsHTML.concat("<ul>");
  for (meat in sandwich['meats']) {
    sandwichAsHTML.concat("<li>", sandwich['meats'][meat], "</li>");
  }
  sandwichAsHTML.concat("</ul><br>");

  sandwichAsHTML.concat("<u>Cheeses</u><br>");
  sandwichAsHTML.concat("<ul>");
  for (cheese in sandwich['cheeses']) {
    sandwichAsHTML.concat("<li>", sandwich['cheeses'][cheese], "</li>");
  }
  sandwichAsHTML.concat("</ul><br>");

  sandwichAsHTML.concat("<u>Veggies</u><br>");
  sandwichAsHTML.concat("<ul>");
  for (veggie in sandwich['veggies']) {
    sandwichAsHTML.concat("<li>", sandwich['veggies'][veggie], "</li>");
  }
  sandwichAsHTML.concat("</ul><br>");

  sandwichAsHTML.concat("<u>Sauces</u><br>");
  sandwichAsHTML.concat("<ul>");
  for (sauce in sandwich['sauces']) {
    sandwichAsHTML.concat("<li>", sandwich['sauces'][sauce], "</li>");
  }
  sandwichAsHTML.concat("</ul><br>");

  previewSandwichNode.innerHTML = sandwichAsHTML;
}

function buildSandwichOnSubmit() {
  console.log("hi");
}

function onLoad() {
  var formNode = document.getElementById("buildSandwichForm");
  formNode.onsubmit = buildSandwichOnSubmit;

  var currentSandwich = {
    bread: "",
    meats: [],
    cheeses: [],
    veggies: [],
    sauces: []
  };

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
        let index = sandwich['meats'].indexOf(this.value);
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
