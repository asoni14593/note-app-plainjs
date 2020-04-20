const showInterval = 3000;
const containerId = "snackbar";
function toast(msg) {
  let x = document.getElementById(containerId);
  x.innerHTML = "";
  let textNode = document.createTextNode(msg);
  x.appendChild(textNode);
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, showInterval);
}
