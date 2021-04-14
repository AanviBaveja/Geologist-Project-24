class Small {
constructor(x, y, r)
{
var options= {
    'restitution':0.8,
    'friction':0.9,
    'density': 12

  }
  this.body=Bodies.circle(x, y,r, options)
  this.radius = r
  World.add(world,this.body);
}
display(){
    var pos =this.body.position;
    push()
    strokeWeight(3)
    stroke("white")
    fill("red");
    ellipse(pos.x, pos.y, this.radius);
    pop()
  }



  
}
