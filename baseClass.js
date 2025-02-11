class BaseClass {
    constructor(x, y,width,height,angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Images/base.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      fill("peach");
      stroke("brown");
      image(this.image,0,0, this.width, this.height);
      pop();
    }
  };
  