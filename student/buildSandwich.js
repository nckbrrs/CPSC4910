function buildSandwichOnSubmit() {
  console.log("hi");
}

function onLoad() {
  var formNode = document.getElementById("buildSandwichForm");
  formNode.onsubmit = buildSandwichOnSubmit;

  var previewSandwichNode = document.getElementById("previewSandwichDiv");

  var sandwich = {
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
        sandwich['bread'] = this.value;
      } else {
        sandwich['bread'] = "";
      }
      previewSandwichNode.innerHTML = JSON.stringify(sandwich);
    }
  }

  var meatInputs = document.getElementById("chooseMeats").getElementsByTagName("input");
  for (meat in meatInputs) {
    meatInputs[meat].onclick = function() {
      if (this.checked) {
        sandwich['meats'].push(this.value);
      } else {
        let index = sandwich['meats'].indexOf(this.value);
        if (index > -1) {
          sandwich['meats'].splice(index, 1);
        }
      }
      console.log(JSON.stringify(sandwich));
    }
  }

  var cheeseInputs = document.getElementById("chooseCheeses").getElementsByTagName("input");
  for (cheese in cheeseInputs) {
    cheeseInputs[cheese].onclick = function() {
      if (this.checked) {
        sandwich['cheeses'].push(this.value);
      } else {
        let index = sandwich['cheeses'].indexOf(this.value);
        if (index > -1) {
          sandwich['cheeses'].splice(index, 1);
        }
      }
      console.log(JSON.stringify(sandwich));
    }
  }

  var veggieInputs = document.getElementById("chooseVeggies").getElementsByTagName("input");
  for (veggie in veggieInputs) {
    veggieInputs[veggie].onclick = function() {
      if (this.checked) {
        sandwich['veggies'].push(this.value);
      } else {
        let index = sandwich['veggies'].indexOf(this.value);
        if (index > -1) {
          sandwich['veggies'].splice(index, 1);
        }
      }
      console.log(JSON.stringify(sandwich));
    }
  }

  var sauceInputs = document.getElementById("chooseSauces").getElementsByTagName("input");
  for (sauce in sauceInputs) {
    sauceInputs[sauce].onclick = function() {
      if (this.checked) {
        sandwich['sauces'].push(this.value);
      } else {
        let index = sandwich['sauces'].indexOf(this.value);
        if (index > -1) {
          sandwich['sauces'].splice(index, 1);
        }
      }
      console.log(JSON.stringify(sandwich));
    }
  }
};

window.addEventListener("load", onLoad, false);
