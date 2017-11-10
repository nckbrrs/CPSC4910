function buildSandwichOnSubmit() {
  console.log("hi");
}

function onLoad() {
  var formNode = document.getElementById("buildSandwichForm");
  formNode.onsubmit = buildSandwichOnSubmit;

  var listOfBreads = document.getElementById("chooseBread").getElementsByTagName("input");
  for (bread in listOfBreads) {
    listOfBreads[bread].onclick = function() {
      console.log(this.value + "has just been clicked\n");
    }
  }

};

window.addEventListener("load", onLoad, false);
