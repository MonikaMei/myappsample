
var dropzone:
function setup() {
  createCanvas(200, 200);
  background(0);

  dropzone = select('#dropzone');
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
}
function highlight() {
  dropzone.style('background-color','#ccc');
}
  function unhighlight() {
  dropzone.style('background-color','#nnn');
}
