
class Box extends BaseClass {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.image = loadImage("hello-world.png");
    this.visibility = 255;
  }
  display() {
    if (this.body.speed < 3) {
      super.display();
    } else {

      push();
      World.remove(world, this.body);
      this.visibility -= 10;
      tint(255, this.visibility);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }
  }

  score(){
    if(this.visibility < 0 && this.visibility > -105){
      score ++;
    }
  }

};
