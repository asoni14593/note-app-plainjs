if (localStorage.getItem("tree"))
  tree._root = JSON.parse(localStorage.getItem("tree"))._root;

function delNote(ev) {
  let noteContent = ev.target.parentElement.parentElement.firstElementChild;
  tree._removeNode(noteContent.innerHTML);
  localStorage.setItem("tree", JSON.stringify(tree));
  render();
  toast("Note Deleted.");
}

function addNote(ev) {
  let targetEle = ev.target.parentElement;
  if (ev.target.value === "Submit" || ev.key === "Enter") {
    tree._addNode(targetEle.firstElementChild.value, "Root");
    targetEle.firstElementChild.value = "";
  } else {
    let newNoteContent = prompt("Write a note to add.");
    tree._addNode(
      newNoteContent,
      targetEle.parentElement.firstElementChild.innerText
    );
  }
  localStorage.setItem("tree", JSON.stringify(tree));
  render();
  toast("Note Added");
}

function editNote(ev) {
  let newNoteContent = prompt("Edit note");
  if (newNoteContent !== null) {
    let oldNoteContent = ev.target.innerText;
    let parentEle =
      ev.target.parentElement.parentElement.parentElement.parentElement.id ===
      "notes-container"
        ? "Root"
        : ev.target.parentElement.parentElement.parentElement.parentElement
            .firstElementChild.firstElementChild.innerText;
    tree._editNode(newNoteContent, oldNoteContent, parentEle);
    localStorage.setItem("tree", JSON.stringify(tree));
    render();
    toast("Note updated");
  }
}

function searchAndHighlight(note) {
  toast(
    tree._search(note).value
      ? tree._search(note).value + " available."
      : note + " not available."
  );
}
