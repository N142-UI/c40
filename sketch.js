var cars,car1,car2,car3,car4;
var allPlayers
var distance = 0
var canvas;
var gameState = 0;
var database;
var playerCount;
var form,game,player;
var c1img,c2img,c3ing,c4img,track;

function preload () {

  c1img = loadImage("images/car1.png")
  c2img = loadImage("images/car2.png")
  c3img = loadImage("images/car3.png")
  c4img = loadImage("images/car4.png")
  track = loadImage("images/track.jpg")
}

function setup() {
  canvas = createCanvas(displayWidth-20,displayHeight-30)
  database = firebase.database();
  game = new Game()
  game.getState()
  game.start()
}

function draw () {

  if(playerCount === 4){
    game.update(1)
  }
  if(gameState === 1){
    clear()
    game.play()
  }
  if(gameState === 2){
    game.end()
  }
  
}