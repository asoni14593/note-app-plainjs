let typingTimer;
const doneTypingInterval = 3000;
const myInput = document.getElementById("add-note");
myInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    if (event.target.parentElement.firstElementChild.value !== "") {
      addNote(event);
    }
  } else {
    clearTimeout(typingTimer);
    if (myInput.value) {
      typingTimer = setTimeout(() => doneTyping(event), doneTypingInterval);
    }
  }
});

function doneTyping(ev) {
  searchAndHighlight(ev.target.value);
}
