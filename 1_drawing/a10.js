/*
Eric Crawford
Assignment 1.0
Stick Figure:  Hank
*/

function setup() {
  var cnv = createCanvas(400, 400);
  cnv.parent('sketch-holder');
  background(color(255));

  //Floor
  noStroke();
  fill(0, 204, 255);
  ellipse(208, 304, 310, 34);
  noFill();
  stroke(0);

  //Left Leg
  line(156, 300, 206, 248);
  line(206, 248, 240, 300);

  //Left Shoe
  fill(140, 98, 70);
  beginShape();
  vertex(240, 300);
  vertex(258, 300);
  vertex(240, 300);
  bezierVertex(248, 288, 256, 288, 258, 300);
  endShape(CLOSE);
  noFill();

  //Right Leg
  line(156, 300, 226, 288);
  line(226, 288, 286, 300);

  //Right Shoe
  fill(140, 98, 70);
  beginShape();
  //vertex(286, 300);
  vertex(300, 286);
  vertex(286, 300);
  bezierVertex(284, 288, 292, 276, 300, 286);
  endShape(CLOSE);
  noFill();

  //Back
  bezier(156, 300, 152, 286, 140, 240, 156, 200);

  //Head
  ellipse(172, 175, 56, 56);

  //Eyes
  line(184, 156, 180, 174);
  line(176, 154, 172, 172);

  //eyebrows
  bezier(182, 138, 176, 132, 170, 138, 170, 138);
  bezier(186, 140, 196, 136, 196, 146, 196, 146);

  //Mouth
  line(160, 172, 188, 182);
  bezier(160, 172, 150, 200, 188, 200, 188, 182);

  //Left Arm
  line(156, 200, 220, 242);
  line(220, 242, 180, 256);

  //Left Hand
  noFill();
  beginShape();
  vertex(180, 254);
  bezierVertex(174, 256, 168, 260, 164, 266);
  vertex(172, 266);
  bezierVertex(174, 262, 178, 260, 182, 258);
  endShape(CLOSE);

  //Right Arm
  line(156, 200, 110, 156);
  line(110, 156, 122, 94);

  //Right Hand
  noFill();
  beginShape();
  vertex(128, 86);
  vertex(132, 86);
  vertex(130, 90);
  bezierVertex(130, 94, 126, 96, 122, 94);
  bezierVertex(120, 94, 118, 90, 118, 86);
  vertex(122, 72);
  vertex(132, 74);
  endShape(CLOSE);

}