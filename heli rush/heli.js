function Heli() {
  this.x = 175;
  this.y = 450;
  this.width = 200;
  this.color = 'red';
  
  this.display = function() {
    //starting screen heli code
    fill(255, 0, 0);
    strokeWeight(2);
    ellipse(this.x, this.y, 200, 200);
    //fill(105, 105, 105); grey
    fill(255);
    ellipse(this.x, this.y-23, 180, 150); // window
    fill(252, 243, 1);
    rect(this.x-4, this.y-120, 10, 20);
    fill(0);
    rect(this.x-100, this.y- 120, 200, 10);
    strokeWeight(10);
    line(this.x-30, this.y+98, this.x-60, this.y+128);
    line(this.x+30, this.y+98, this.x+60, this.y+128);
    
    fill(0);
    textSize(15);
    text("Click to start!", this.x-45, this.y-10);
  },
  
    this.hover = function() {
    this.x = this.x - random(-1,1);
    this.y = this.y - 0.3;
    
    if (this.y < 0) {
      //TITLE!
    //   this.y >= 0;
    // } else if (this.y > 600) {
    //   this.y <= 0
    }
    
    //if (this.x <= width) {
      //this.x = 150;
    //}
  }
  
  }