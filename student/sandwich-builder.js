function showError(msg) {
  var errorNode = document.getElementById("errorMessage");
  if(msg == "" || msg == "false") {
    // hide error
    errorNode.style = "visibility: hidden;";
    return;
  } else {
    errorNode.innerText = msg;
    errorNode.style = "color: red;";
  }
};

function nameNumOnSubmit() {
  var buttonNode = document.getElementById("nameNumSubmit");
  buttonNode.innerText = "Submitting, please wait...";
  return true;
}

function onLoad() {
  var formNode = document.getElementById("nameNumForm");
  formNode.onsubmit = nameNumOnSubmit;
  if (errorMessage != "false") {
    showError(errorMessage);
  }
};

window.addEventListener("load", onLoad, false);
