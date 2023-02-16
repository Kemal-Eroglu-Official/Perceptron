class Point {

     constructor () {
          this.x = floor(random(0, width));
          this.y = floor(random(0, height));
          this.state = (this.x >= this.y) ? 1 : -1;
     }

     set (x, y) {
          this.x = x;
          this.y = y;
     }

     setState () {
          this.state = (this.x >= this.y) ? 1 : -1;
     }

     show (guess_value) {
          noFill();
          if (this.state == guess_value) {
               stroke(0, 255, 0);
          }
          else {
               stroke(255, 0, 0);
          }
          strokeWeight(10);
          point(this.x, this.y);
     }
}