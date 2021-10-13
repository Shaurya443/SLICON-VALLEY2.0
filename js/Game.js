class Game {
    constructor(){
  
    }
  // get to know which gameState in the game in place from the database
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  // to update the gameState if it goes to end State from the db
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  // to start the game and create a player 
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
     
      //creating sprites for the beyblade
      bey1 = createSprite(700,400,20,20)
       bey1.addImage("spinningBey",beyblade3_Img)
       bey1.scale = 0.1
    
       bey2 = createSprite(140,420,20,20)
       bey2.addImage("spinningBey",beyblade4_Img)
       bey2.scale = 0.6

       bey1.depth = launcher1.depth;
   launcher1.depth = launcher1.depth+1;

   bey2.depth = launcher2.depth;
   launcher2.depth = launcher2.depth+1;

      var beys = [bey1,bey2]
  
  
  
    }
  
    play(){
      form.hide();
  
      Player.getPlayerInfo();
     // player.getCarAtEnd();
  
     // 
      if(allPlayers !== undefined){
        background("#c68767")
       // image(beyStadium_Img,0,-displayHeight*4,displayWidth,displayHeight*5)
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        //var x = 175;
       // var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
         // x = x + 200;
          //use data form the database to display the cars in y direction
         // y = displayHeight - allPlayers[plr].distance;
         // beys[index-1].x = x;
         // beys[index-1].y = y;
  
          //if (index === player.index){
           // stroke(10)
            //fill("red")
            //ellipse(x,y,60,60)
           // beys[index - 1];
           // camera.position.x = displayWidth/2;
           // camera.position.y = cars[index-1].y
          //}
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      //if(keyIsDown(UP_ARROW) && player.index !== null){
      //  player.distance +=10
       // player.update();
    ////  }
  //if(player.distance>3860){
  //  gameState=2
  //  player.rank +=1
   // Player.updateCarsAtEnd(player.rank);
  //}
      drawSprites();
    
    }
    //end(){
     // console.log("GAME ENDED")
     // console.log(player.rank)
    //}
  }
  