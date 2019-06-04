function Copter() {
  this.x = 30;
  this.y = 225;
  this.r = 20;
  //new v
  this.pulldown = 0; //gravity
  this.speed = 0;// vertical velocity
  this.climb = -20; // altitude
  
  //new ^
  this.show = function() {
     strokeWeight(1);
     fill(255, 0, 0);
  rect(this.x, this.y, 60, 5); // body part
  ellipse(this.x + 60, this.y+15, this.r*2, this.r*2); //cpit
  rect(this.x+57, this.y-10, 5, 6); // blade holder
  fill(0);
  rect(this.x+30, this.y-15, 60, 5); //blade
  triangle(this.x, this.y, this.x, this.y-10, this.x+5, this.y); //fin
  fill(255, 0, 0, 0);
  
  
  strokeWeight(2);
  fill(255);
  ellipse(this.x+69, this.y+10, 20, 20); //screen shield
  }
  //new v
  this.up = function() {// causes copter to increase its height
  this.speed += this.climb*0.4;
  }
  
  this.down = function() {// causes copter to increase its height
  this.speed -= this.climb * 0.4;
  }
  
  
  
  this.update = function() {  
    this.speed += this.pulldown; // this causes the  helicopter
    this.speed *= 0.9;
    this.y += this.speed; // this causes the  helicopter height to change by its speed
    
  // height boundaries for helicopter 
    if (this.y <= 30) {
      this.y = 30;
    } else if (this.y >= 450 ) {
      this.y = 450;
    }
  }
  
  //collision with missile
  this.explode = function (){
    noStroke();
        fill(200, 50, 0);
    ellipse(this.x, this.y, 50, 50);
    fill(255, 85, 0);
    ellipse(this.x+50,this.y, 50, 50);
    fill(255, 0, 0);
    ellipse(this.x+90,this.y, 50, 50);
    fill(255, 255, 0);
    ellipse(this.x+25, this.y+25, 50, 50);
    fill(200, 50, 0);
    ellipse(this.x+60, this.y+25, 50, 50);
  }

}
  