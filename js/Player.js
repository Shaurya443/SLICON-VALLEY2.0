class Player {
    constructor(){
      this.index = null;
      //this.distance = 0;
      this.name = null;
      //this.rank = null;
    }
  //count the number of players in the database
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
  // update the number of players from the database from the form class
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
  //is used to write the name of the player to db 
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
       
      });
    }
  
  // to get the players details db
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  
    //getCarAtEnd(){
    //  database.ref('CarsAtEnd').on("value",(data)=>{
     //   this.rank = data.val();
     // })
      
   // }
  
   // static updateCarsAtEnd(rank){
  //database.ref('/').update({
   // CarsAtEnd:rank
  //})
   // }
  }
  