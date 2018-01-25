/*
  Programming Basics
  Zack Bennett-Engler
  bennettzack68@gmail.com
  Assignment 1.0
  Tile
  Circluar Mayhem
*/

var spacing = 50;
var ellipseWidth = spacing/2;
var thickness = 3;

function setup() {
  var cnv = createCanvas(600, 600);
  cnv.parent('sketch-holder');
  //initial width for the circles
  ellipseWidth = 160;
}

function draw() {
  background('#ffffff');
  
  for (var x = -spacing; x <= width; x+=spacing) {
    for (var y = -spacing; y <= height; y+=spacing) {
      tile(x, y);
    }
  }
}

function tile( x, y) {
  noFill();
  stroke('#333333');
  strokeWeight(thickness);
  
  ellipse(x+spacing/2, y+spacing/2, ellipseWidth, ellipseWidth);
}  

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    ellipseWidth -= 10;
  } else if (keyCode == RIGHT_ARROW) {
    ellipseWidth += 10;
  } else if (keyCode == UP_ARROW) {
    thickness += 1;
  } else if (keyCode == DOWN_ARROW) {
    thickness -= 1;
  }

  //constrain variables
  thickness = constrain(thickness, 1, 10);
  spacing = constrain(spacing, 10, 1000);
  ellipseWidth = constrain(ellipseWidth, 10, 1000);
}