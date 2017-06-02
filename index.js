function handleDragEvent(e) {
  console.log('drag triggered', e.target.id);
  e.dataTransfer.setData("text", e.target.id);
}

function handleDropEvent(e) {
  e.preventDefault();
  var id = e.dataTransfer.getData("text");
  console.log('drop triggered ',id);
  e.target.appendChild(document.getElementById(id));
}

function allowDrop(e) {
  e.preventDefault();
}
