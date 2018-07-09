console.log('Hello');
var dropzone:
function setup() {
  createCanvas(200, 200);
  background(0);

  dropzone = select ('#dropzone');
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
}
function highlight() {
  dropsone.style('background-color','#ccc');
}
  function unhighlight() {
  dropsone.style('background-color','#nnn');
}
