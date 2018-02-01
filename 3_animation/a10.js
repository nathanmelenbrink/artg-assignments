var n = 30;

function setup() {
  var cnv = createCanvas(600, 600);
  cnv.parent('sketch-holder');
  stroke(random(0,255), random(0,255), random(0,255));
}

function draw() {
  fill(255, 3);
  rect(0,0,width,height);

  var pX = 0;
  var pY = 0;

  for (var i=0; i<n; i++) {
    if(frameCount%width < (width-10)){
      var x = (frameCount + random(-i,i))% width;
      var y = i*20;
      line(pX, pY, x, y);
      pX = x;
      pY = y;
    } else{
      stroke(random(0,255), random(0,255), random(0,255));
      pX = 0;
    }
  }
}