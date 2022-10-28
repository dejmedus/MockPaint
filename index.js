
const palette = {
  'black': '#000',
  'white': '#fff',
  'red': '#ff0000',
  'orange': '#ffa500',
  'yellow': '#ffff00',
  'green': '#008000',
  'light-green': '#affc41',
  'blue': '#0000ff',
  'light-blue': '#90e0ef',
  'indigo': '#4b0082',
  'violet': '#ee82ee',
  'brown': '#774936',
}

let curColor = palette.black;
let brushWidth = 12;
let curCursor = 'pen';
let bgColor = '#fff';

function setup() {
  createCanvas((windowWidth - 50), (windowHeight - 80));
  background(bgColor);
}

function draw() {
  switch (curCursor) {
    case 'pen':
      cursor('images/cursors/pen.png');
      break;
    case 'brush':
      cursor('images/cursors/brush.png');
      break;
    case 'bucket':
      cursor('images/cursors/bucket.png');
      break;
    case 'eraser':
      cursor('images/cursors/eraser.png');
      break;
    default:
      cursor(CROSS);
      break;
  }

  curCursor == 'pen'
    ? strokeWeight(1)
    : strokeWeight(brushWidth)

  curCursor == 'eraser'
    ? (stroke(color(bgColor)), strokeWeight(brushWidth))
    : stroke(color(curColor))

  // Only draw if the mouse is pressed inside the canvas
  // Currently, bucket fills the screen with one color
  if ((mouseX >= 0) && (mouseX <= width) && (mouseY <= height) && (mouseY >= 0)) {
    if (mouseIsPressed === true) {
      curCursor == 'bucket'
        ? (bgColor = curColor, background(bgColor))
        : line(mouseX, mouseY, pmouseX, pmouseY)
    }
  }
}

function brushColor(color) {
  curColor = palette[color.id] || pallette.black;
}

// Cap brush size at 980
function brushSize(size) {
  brushWidth = (size.value > 989) ? '980' : size.value
}

function selectBrush() {
  curCursor = 'brush';
}
function selectPen() {
  curCursor = 'pen';
}
function selectEraser() {
  curCursor = 'eraser';
}
function selectBucket() {
  curCursor = 'bucket';
}


function clearScreen() {
  clear()
  bgColor = '#fff';
  background(bgColor);
}

function windowResized() {
  resizeCanvas((windowWidth - 50), (windowHeight - 80));
  background(bgColor);
}
