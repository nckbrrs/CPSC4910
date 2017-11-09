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

function nameNumValidate() {
  var name = document.getElementById("name").value;
  var phoneNum = document.getElementById("phoneNum").value;

  if (name === "" || phoneNum === "") {
    showError("You must provide a name and a phone number.");
    return false;
  }

  showError("false");
  return true;
}

function nameNumOnSubmit() {
  if (!validate()) {
    return false;
  }
  
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
