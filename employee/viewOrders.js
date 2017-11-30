function onLoad() {
  var orderListNode = document.getElementById("orderList");

  axios.get("http://54.200.82.249:3000/orders")
    .then(function (response) {
      orderListNode.innerHTML = JSON.stringify(response['data']);
      return true;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
}

window.addEventListener("load", onLoad, false);
