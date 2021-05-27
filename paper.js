class Paper{
    constructor(){
var options={
restitution:0.5,
friction:0.5,
density:1.2
}

this.body=Bodies.circle(130,600,15,options)
World.add(world,this.body)
this.image=loadImage('paper.png')
    }

display(){
imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y,15,15)
}}