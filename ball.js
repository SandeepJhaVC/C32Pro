class Ball {
    constructor(x, y, radius) {
        var options = {
            //isStatic: true
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.r = radius;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        fill("brown");
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
};