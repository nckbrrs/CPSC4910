function buildSandwichOnSubmit() {
  console.log("hi");
}

function onLoad() {
  var formNode = document.getElementById("buildSandwichForm");
  formNode.onsubmit = buildSandwichOnSubmit;

  var sandwich = {
    bread: "";
    meats: [];
    cheeses: [];
    veggies: [];
    sauces: [];
  }

  var listOfBreads = document.getElementById("chooseBread").getElementsByTagName("input");
  for (bread in listOfBreads) {
    listOfBreads[bread].onclick = function() {
      sandwich['bread'] = this.value;
      console.log(JSON.stringify(sandwich));
    }
  }

};

window.addEventListener("load", onLoad, false);
