let spots = [];
let gameState = 0;
let score = 0;

let img0, img1, img2;
let launcher;

function preload(){
  img0 = loadImage('ike.png');
  img1 = loadImage('cannon.png');
  img2 = loadImage('bus.jpg');
}

function setup(){
  //framerate = 20;
  var cnv = createCanvas(600,400);
  cnv.parent('sketch-holder');
  launcher = new Launcher(img1);
  imageMode(CENTER);
}

function draw(){
  if (gameState == 0){
    startScreen();
  } else if (gameState == 1){
    update();
  } else if (gameState == 2){
    gameOver();
  }
}

function startScreen(){
  background(255);
  text("Click to Begin", 10, 30);
  spots = [];
}

function update(){
  image(img2, width/2, height/2, width, height);
  for (let i = 0; i < spots.length; i++){  // Make a for() loop to loop through each Spot 
    spots[i].move();            // Move each object
    spots[i].display();         // Display each object
    //spots[i].check();           // Check for mouse overlap
  }
  launcher.display();
  score++;
  text("Playing", 10, 30);
  text("Score: " + score, width - 100, 30);
}

function gameOver(){
  background(255);
  text("Game Over", 10, 30);
  text("Score: " + score, width - 100, 30);
}

function mouseClicked(){
 if (gameState == 0){
   gameState = 1;
 } else if (gameState == 1){
   // instead of clicking to advance the gamestate, 
   // click to create new spots
   let s = new Spot(mouseX, mouseY, img0);
   spots.push(s);
 } else if (gameState == 2){
   gameState = 0;
 }
}

class Spot {
  constructor(_x, _y, _img) {
    this.x = width/2;
    this.y = height - 30;
    this.dx = (_x - width/2)/20;
    this.dy = (_y - height)/20;
    this.img = _img;
    this.diameter = 20;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;

    if ((this.x > (width - this.diameter/2)) || (this.x < this.diameter/2)) {
      this.dx *= -1;
    }
    if ((this.y < this.diameter/2)) {
      this.dy *= -1;
    }
  }

  display() {
     //ellipse(this.x, this.y, this.diameter, this.diameter);
     image(this.img, this.x, this.y, 25, 40);
  }

  check() {
    if (abs(this.x - mouseX) < this.diameter && abs(this.y-mouseY < this.diameter)){
      gameState = 2;
    }
  }
}

class Launcher {
  constructor( _img) {
    this.x = width/2;
    this.y = height - 30;
    this.img = _img;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;

    if ((this.x > (width - this.diameter/2)) || (this.x < this.diameter/2)) {
      this.dx *= -1;
    }
    if ((this.y < this.diameter/2)) {
      this.dy *= -1;
    }
  }

  display() {

    angleMode(DEGREES);
    //let angle = atan((height-mouseY)/(mouseX - width/2));
    let angle = atan2((height-mouseY),(width/2-mouseX)) - 70;
    print(angle);

    push();

    translate(width / 2, height - 20);
    //let rot = map(mouseX, 0, width, -90, 90);

    rotate(angle);

    image(this.img, 0, 0, 100, 100);

    pop();
  }


}


