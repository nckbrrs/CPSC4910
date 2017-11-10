function buildSandwichOnSubmit() {
  console.log("hi");
}

function onLoad() {
  var formNode = document.getElementById("buildSandwichForm");
  formNode.onsubmit = buildSandwichOnSubmit;

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
      sandwich['bread'] = this.value;
      console.log(JSON.stringify(sandwich));
    }
  }

  var meatInputs = document.getElementById("chooseMeats").getElementsByTagName("input");
  for (meat in meatInputs) {
    meatInputs[meat].onclick = function() {
      console.log((meatInputs[meat]).checked);
      /*
      if ((meatInputs[meat]).checked) {
        console.log(this.value, " got checked\n");
        sandwich['meats'].push(this.value);
      } else {
        var index = sandwich['meats'].indexOf(this.value);
        if (index > -1) {
          sandwich['meats'].splice(index, 1);
        }
      }*/
      console.log(JSON.stringify(sandwich));
    }
  }
};

window.addEventListener("load", onLoad, false);
