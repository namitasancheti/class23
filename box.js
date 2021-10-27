class Box{
    //properties
    constructor(){
        this.ground = Bodies.rectangle(200,390,200,20,{isStatic:true});
        World.add(myWorld, this.ground);
    }

    //function names can be anything

    display(){
        rectMode(CENTER);
        rect (this.ground.position.x,this.ground.position.y,400,20);

    }
}