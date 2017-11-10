function onLoad() {
  var formNode = document.getElementById("buildSandwichForm");
  //formNode.onsubmit = buildSandwichOnSubmit;

  var listOfBreads = document.getElementById("chooseBread").getElementsByTagName("input");
  for (i=0; i<listOfBreads.length; i++) {
    console.log(listOfBreads[i].id);
  }

  if (errorMessage != "false") {
    showError(errorMessage);
  }
};

window.addEventListener("load", onLoad, false);
