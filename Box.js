// class Box extends BaseClass {
//     constructor(x, y, width, height){
//       super(x,y,width,height);
//     //   this.image = loadImage("sprites/wood1.png");
//     }
// };

class Box{
  constructor(x, y, width, height, color) {
      var options = {
          'restitution':0.2,
          'friction':0.5,
          'density':1.0
      }
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color = color;
      // this.image = loadImage("base.jpg");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill("pink");
      rect(0,0,this.width,this.height);
      // imageMode(CENTER);
      // image(this.image, 0, 0, this.width, this.height);
      pop();
    }
}