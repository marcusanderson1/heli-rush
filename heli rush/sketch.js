var state = 0;
var score;
var copter;
var clouds = [];
var missiles = [];
var heli;
var count;

function setup() {
  createCanvas(350, 580);
  copter = new Copter();
  missiles.push(new Missile());
  clouds.push(new Cloud());
  heli = new Heli();
  score = 0;
}

function draw() {
//menu screen code
  if (state == 0) { 
  background(0, 100, 255);
  heli.display();
  heli.hover();
// TITLE
  textSize(20);
  fill(255);
  text("Welcome to Heli Rush!", 70, 550);
  } else if (state == 1) {
 //sky
  background(0, 100, 255);
// score
  fill(0);
  rect(0, 550, 350, 50);
    noStroke();
  textSize(15);
  fill(255);
  text("Score: " + score, 140, 570);
//score starts to increment
  score = score + 1
//clouds appear as a never ending for loop array
  for (var i = 0; i < clouds.length; i++) {   //loops with arrays/ array of objects
    clouds[i].move();
    clouds[i].display();
  }
  if (frameCount % 120 == 0) {  // New set of clouds generated per modulo of 120 frames.
    clouds.push(new Cloud());
  }
  //helicopter appears and begins to move
  copter.show();
  copter.update();
  //missiles appear as a for loop with a nested if statement to guarantee that something happens when missiles collide with helicppter.
  for (var i = 0; i < missiles.length; i++) {
    missiles[i].show();
    missiles[i].move();
    
    if (missiles[i].hits(copter)) {
      
      copter.explode();
      copter.update();
      missiles[i].explode();
      noLoop();
      score = 0;
      state = 0;
      
    }
    // setup();
  }
  if (frameCount % 40 == 0) {
    missiles.push(new Missile());
  }
  if (score == 3000 && state != 0) {
  	  score = 0;
  	  state = 2;
  }
// ------------------------------------------------------End of state 1.
  } else if (state == 2) {
  background(0);
  fill(255);
  textSize(25);
  text("MISSION ACCOMPLISHED", 20, 290);
   }     
} // end of draw 
function mousePressed(){
  if(copter.explode == true){
    state = 1;
  } else if (state != 1)  {
    state = 1;
    score = 0;
  }
}  // end of mouse pressed 
function keyPressed() {
  if (keyCode == UP_ARROW) {
    copter.up();
  } else if (keyCode == DOWN_ARROW) {
    copter.down();
  }
}