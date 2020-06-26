var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
vra track;
var form, player, game;

var animation1,animation2 ;       
var animation3,animation4 ,animation5;       

var cars, car1, car2, car3, car4;
function preload(){
animation1=loadImage("images/car1.png");
animation2=loadImage("images/car2.png");
animation3=loadImage("images/car3.png");
animation4=loadImage("images/car4.png");
animation5=loadImage("images/track.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
