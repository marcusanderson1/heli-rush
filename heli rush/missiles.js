function Missile() {
    this.x = 350; // always appear at the end of the screen
    this.y = random(50, 450); // appear at random heights so heli can dodge
    this.r = 20;
    //this.w = 40;
    this.speed = 5;// speed of projectiles
    // console.log("hi");
    
    
    //missiles!!!!!!!
    this.show = function() {
    // console.log("bye");
    push();
    stroke(random(255), 0, 0);
    strokeWeight(2);
    fill(255, 0, 0);
    triangle(this.x-40, this.y, this.x, this.y-10, this.x, this.y+10);//missile head
    strokeWeight(7);
    line(this.x+25,this.y-10,this.x+25,this.y+10);
    strokeWeight(2);
    fill(255,255,0);
    ellipse(this.x, this.y, this.r*3, this.r*1.3); //missile body
    strokeWeight(2);
    fill(255,0, 0);
    line(this.x-25,this.y-10,this.x-25,this.y+10);
    strokeWeight(2);
    line(this.x-3,this.y-13,this.x-3,this.y+13);
    line(this.x,this.y-13,this.x,this.y+13);
    
    //quad(this.x, this.y, this.x+this.w, this.y-2*this.w, this.x+this.w, this.y-this.w, this.x+this.w, this.y-this.w);
    rotate(720);
    pop();
    }
    
    this.move = function() {
      // console.log("eye");
        this.x -= this.speed; // rock move towards left 
        this.y = this.y + random(-1,1); // rock jiggle
    }
    
    this.hits = function(copter) {
      var d = dist(this.x, this.y, copter.x, copter.y);
      if (d < this.r + copter.r) {
        return true;
      } else {
        return false;
      }
    }
    
    this.explode = function() {
    this.toDelete = true; 
     
    }
    
    
}