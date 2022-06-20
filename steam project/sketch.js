var PLAY;
var END;
var SERVE;
var gamestate;
var serve;
var backgroundImg1;
var backgroundImg2;
var score;
var canvas;
var power;

var fighter1_animation = [];
var fighter1_spriteData;
var fighter1_spriteSheet;

var fighter2_animation = [];
var fighter2_spriteData;
var fighter2_spriteSheet;

var power_animation;
var power_spriteData;
var power_spriteSheet;


function preload(){
    backgroundImg1 = loadImage("assets/MicrosoftTeams-image (2).png");
    backgroundImg2 = loadImage("assets/MicrosoftTeams-image (3).png");
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    fundo = createSprite(windowWidth/2, windowHeight/2, width, height);
    fundo.addImage(backgroundImg1);
    fighter1 = createSprite(70,windowHeight-170,20,150);
    fighter2 = createSprite(1200,windowHeight-170,20,150);
    
    fighter1.visible = false;
    fighter2.visible = false;

    gamestate = SERVE;
    
}

function draw() {
    background(180);    

    if(gamestate == "serve"){
        fundo.addImage(backgroundImg1);  
    }
    else {
        gameplay();
    }


drawSprites();
}


function keyPressed(){
    if(keyCode === 69){
    fundo.addImage(backgroundImg2);
    fighter1.visible = true;
    fighter2.visible = true;      
    if(gamestate == "serve"){
      gamestate = "play";
    }
    }
  }

  function gameplay(){
    if(keyIsDown(RIGHT_ARROW)){
        fighter1.x += 2;
    }
    if(keyIsDown(LEFT_ARROW)){
        fighter1.x -= 2;
    }
  }