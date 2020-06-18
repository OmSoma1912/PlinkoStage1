const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var a;

function setup(){
    createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    a = new Ground(width/2,height,width,20);

    for(var k = 0; k <= width; k = k + 80){
        divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
    }

    for (var j = 35; j <=width; j=j+50){
        plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50){
        plinkos.push(new Plinko(j, 125));
    }

    for (var j = 35; j <=width; j=j+50){
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 50; j <=width-10; j=j+50){
        plinkos.push(new Plinko(j,225));
    }

    for (var j = 35; j <=width; j=j+50){
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50){
        plinkos.push(new Plinko(j,325));
    }

    for (var j = 35; j <=width; j=j+50){
        plinkos.push(new Plinko(j,375));
    }

    for (var j = 50; j <=width-10; j=j+50){
        plinkos.push(new Plinko(j,425));
    }
}

function draw(){
    background(0);
    Engine.update(engine);
    
    a.display();

    for (var k = 0; k < divisions.length; k++) {
        divisions[k].display();
    }

    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].display();
    }

    if(frameCount%30===0){
        particles.push(new Particles(random(1,379), 10,10));
    }

    for (var m = 0; m < particles.length; m++) {
        particles[m].display();
    }
}