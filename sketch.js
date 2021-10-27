//physics engine
/*
Ball: circle--cricket ball. it will bounce but depends on the force given to it
Plastic ball
Tennis ball-- bounce a lot

Step1: Namespacing the big terms 
Eg: Namita Sancheti Kuppama
Short Name: Namita

//Namespacing
const Namita = Namita Sancheti Kuppama

const = constant(the value is fixed)

const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

var - value will be keep on changing
const - value will be fixed

Step 2: You have to create engine

Matter.Engine.create();

Step 3: add the engine to the world.


//depends upon the shape creae the body(4,5 and 6)
Step 4: Create the body

Step 5: Add the body to the world

Step 6: use that shape and describe about it in function draw

Step 7: update the engine in the function draw

*/

const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var myEng;
var myWorld;


function setup() {

  //creating 
  createCanvas(400,400);

 myEng=Engine.create();
 myWorld = myEng.world;

 //rect body: ground
 

 nayan=new Ball();
 namita=new Ball();

 saritha=new Box();
}

function draw() {
  background("pink"); 
  
  Engine.update(myEng)
  
 

  nayan.display();
namita.display();

saritha.display();
  

  
 //drawSprites();
} 

//CREATING BLUEPRINTS
/*
Blueprint is the idea of the project(Bus, House, farming, kidnap the PM)

Every game is very big.

1000 dresses of same size

body size. outline. main file(properties--apperance, function-usage)
 

*/
