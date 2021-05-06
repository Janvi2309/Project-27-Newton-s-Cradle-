class slingShot{
	constructor(bodyA,pointB)
	{
		var options={
			bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:1,
			}
		
			
        this.body=Constraint.create(options);

        World.add(world,this.body)
	}

	display()
	{
		line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.position.x,this.pointB.position.y);
        


 
}
 fly(){

this.body.bodyA=null;

 }

 attatch(mango){

    this.body.bodyA=mango;

 }

}