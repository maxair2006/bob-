class Bobs{
 constructor(x,y){
   var options={
       restitution : 1,
       friction:0,
       density:0.8,
   }
   this.body=Bodies.circle(x,y,25,options);
   World.add(world,this.body);
 }
 display(){
     var pos = this.body.position
     push()
     translate(pos.x,pos.y)
     rotate(this.body.angle)
     ellipseMode(RADIUS);
     ellipse(0,0,25,25)
     pop()
 }


}