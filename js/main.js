const tree = new Tree();
tree._addNode("Root");

function render() {
  if (localStorage.getItem("tree")) {
    let storedTree = localStorage.getItem("tree");
    document.getElementById("notes-container").innerHTML = displayNotes(
      JSON.parse(storedTree)._root.children
    );
  } else {
    localStorage.setItem("tree", JSON.stringify(tree));
    document.getElementById("notes-container").innerHTML = displayNotes(
      tree._root.children
    );
  }
}

function loadDependencies() {
  var script = document.createElement("script");
  script.src = "./js/event-listeners.js";
  script.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(script);
}

function displayNotes(lst) {
  var html = [];
  html.push("<ul>");
  lst.map((item) => {
    html.push(makeLI(item));
  });
  html.push("</ul>");

  return html.join("\n");
}

function makeLI(elem) {
  var html = [];
  html.push(
    `<li><div class='note'><div class='note-content' onclick='editNote(event)'>${elem.value}</div>`
  );
  html.push(
    "<div class='actions'><button type='button' onclick='delNote(event)'>Delete</button>" +
      "<button type='button' onclick='addNote(event)'>Add Note</button></div></div>"
  );
  if (elem.children) html.push(displayNotes(elem.children));
  html.push("</li>");
  return html.join("\n");
}

window.onload = function () {
  render();
  loadDependencies();
};
