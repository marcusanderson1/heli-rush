function Cloud() {
    this.x = random(300, 350);
    this.y = random(0, 300);
  
    this.display = function() {
       //cloud code
    noStroke();
    fill(255);
    ellipse(this.x, this.y, 20, 20);
    ellipse(this.x+6, this.y+10, 20, 20);
    ellipse(this.x-16,this.y, 20, 20);
    ellipse(this.x-10, this.y+10, 20, 20);
    ellipse(this.x-25, this.y+10, 20, 20);
    }
    this.move = function() {
        this.x = this.x - random(0, 5); // cloud move towards left 
        this.y = this.y + random(-1,1); // cloud jiggle
    }
}




  
 




