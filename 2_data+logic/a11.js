var weight = 1;
// Declare button dimensions as global variables in 
// case you need more buttons later
var buttonWidth = 30; 
var buttonHeight = 10;
// Declare a boolean to toggle between rect and line
var drawRect = true; 

function setup() {
	createCanvas(200, 200);
	stroke(0); // we moved the default stroke color to setup()
    strokeWeight(weight);
}

function draw(){
	// draw a button. we'll use it to toggle between drawing rects and lines 
  	fill (0,0,255);
  	rect(10, 10, buttonWidth, buttonHeight);

  	if (mouseIsPressed == true) {
    	if (drawRect == true){
      		// draw squares if drawRect == true, using "weight" as the width and height parameters
      		rect(mouseX, mouseY, weight, weight); 
   		} else {
      		// draw a line if drawRect == false, using "weight" as the strokeWeight
      		strokeWeight(weight);
      		line(mouseX, mouseY, pmouseX, pmouseY);
      	}
    }	
}

// lets use another one of p5's functions called mouseReleased()
function mouseReleased() {
    // see if our button was clicked
    if ((mouseX > 10) && (mouseX < buttonWidth+10) && (mouseY > 10) && (mouseY < buttonHeight+10)){
      print("our button was clicked!"); // prints to the console so we know it's working
      if (drawRect == true){ 
          drawRect = false; // if drawRect is true, switch to false
      } else {
          drawRect = true;  // if drawRect is false, switch to true
      }
    }
}

function keyPressed() {
	if (key == 'b' || key == 'B') {
	  stroke(0, 0, 255);
	} else if (key == 'c' || key == 'C'){
	  stroke(0, 255, 255);
	} else if (key == 'm' || key == 'M'){
	  stroke(255, 0, 255);
	} else if (key == 'w' || key == 'W'){
	  stroke(0);
	} else if (keyCode == RIGHT_ARROW){
      weight++;
      strokeWeight(weight);
    } else if (keyCode == LEFT_ARROW){
      weight/=2;
      strokeWeight(weight);
    }
}