 //var backgroundImg;
 var beyStadium_Img,launcher1_Img,launcher2_Img;
var beyblade1_Img,beyblade2_Img;
var bey1,bey2
var startx=400, starty=400, angle=0, increment=1, radius=150;

var gameState = 0;
var database, form,player,game
var playerCount
var allPlayers


function preload(){

  
  beyStadium_Img = loadImage("Images/beyStadium.jpeg.png")
 launcher1_Img = loadImage("Images/launcher1.png")
  launcher2_Img = loadImage("Images/launcher2.png")
 beyblade1_Img = loadImage("Images/beyblade3.png")
  beyblade2_Img = loadImage("Images/beyblade4.png")
 beyblade3_Img = loadImage("Images/beyblade1.png")
  beyblade4_Img = loadImage("Images/beyblade2.png")
}
function setup() {
  createCanvas(800, 800);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

 


  stadium = createSprite(400,400,100,100) ;
  stadium.addImage("beyStadium",beyStadium_Img)
  stadium.scale = 0.6

  launcher1 = createSprite(700,400,20,20)
  launcher1.addImage("launching",launcher1_Img)
  launcher1.scale = 0.55
  
  launcher2 = createSprite(130,430,20,20)
  launcher2.addImage("launching",launcher2_Img)
  launcher2.scale = 0.38

 //bey1 = createSprite(700,400,20,20)
  //bey1.addImage("spinningBey",beyblade3_Img)
   //bey1.scale = 0.1
    
    //bey2 = createSprite(140,420,20,20)
      // bey2.addImage("spinningBey",beyblade4_Img)
      // bey2.scale = 0.6
  
  
  

  bey1.depth = launcher1.depth;
   launcher1.depth = launcher1.depth+1;

   bey2.depth = launcher2.depth;
   launcher2.depth = launcher2.depth+1;

}

function draw() {
  if(playerCount===2){
    game.update(1)
  }
  
  if(gameState===1){
    clear();
    game.play()
  }

 /// angle=angle+increment;
 /// bey2.x=startx+radius*Math.cos(angle * Math.PI/100);
 //// bey2.y=starty+radius*Math.sin(angle * Math.PI/100);
 // bey2.rotation=60-angle;
  
  
//angle=angle+increment;
 //bey1.x=startx+radius*Math.cos(angle * Math.PI/180);
///bey1.y=starty+radius*Math.sin(angle * Math.PI/180);
///bey1.rotation=100-angle;

//bey1.collide(bey2)
//bey2.collide(bey1)

//bey1.setCollider("circle", 0,0,600)
//bey1.debug = true;

//bey2.setCollider("circle", 0,0,100)
//bey2.debug = true;

drawSprites()
}