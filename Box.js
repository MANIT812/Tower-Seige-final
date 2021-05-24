class Box{
    constructor(x,y){
        var options={
            density:1,
            restitution:0.5,
            frictionAir:0.005,
            friction:0.9
        }
        
        this.body=Bodies.rectangle(x,y,40,40,options);
        this.width=40;
        this.height=40;
        this.visibility=255;
        
        World.add(world,this.body);
    }
    score(){
        if (this.visibility<0 && this.visibility>-15){
        score++;
        
        }
    }
    display(){
        textSize(20)
        fill("black")
        text(score,100,100)
        if(this.body.speed<5){
           var pos =this.body.position;
           var angle=this.body.angle;
           push();
           translate(pos.x,pos.y);
           rotate(angle);
           fill("blue");
           rectMode(CENTER);
           rect(0,0,this.width,this.height);
           pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.visibility=this.visibility-5;
            pop();

        }
    }
}