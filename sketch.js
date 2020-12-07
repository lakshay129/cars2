var gameState=0;
var car1
var car2
var car3
var car4
var cars
var car1i;
var car2i;
var car3i
var car4i;
var groundi;
var tracki;

function preload(){
  car1i=loadImage("car1.png");
  car2i=loadImage("car2.png");
  car3i=loadImage("car3.png");
  car4i=loadImage("car4.png");
  tracki=loadImage("track.jpg");
}

var playerCount=0;
var allPlayers;
var form1,player1;
var game1;
var database;

function setup(){
  createCanvas(displayWidth-20,displayHeight-20);
  database=firebase.database();
game1 = new game();
game1.getState();                                
game1.start();

  
}

function draw(){
  if(playerCount === 4){
    game1.update(1);
  }
  if(gameState ===1){
    clear ();
    game1.play();

  }
  if(gameState ===2){
  game1.end();
  }

}
