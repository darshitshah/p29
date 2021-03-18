class Polygon{
    constructor(x, y) {
        var options = {
            'isStatic': false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(50, 200, 20);
        World.add(world, polygon);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(polygon.png, polygon.position.x, polygon.position.y, 40,40);
        pop();
      }
    }
   
        
    
