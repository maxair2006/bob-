class Rope{
    constructor(body1,body2,offsetx,offsety){
        this.offsetx=offsetx;
        this.offsety=offsety;
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetx,y:this.offsety}

        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var pointA= this.rope.bodyA.position;
        var pointB= this.rope.bodyB.position;
        var anchor2x=pointB.x+this.offsetx;
        var anchor2y=pointB.y+this.offsety;
        line(pointA.x,pointA.y,anchor2x,anchor2y)
    }
}