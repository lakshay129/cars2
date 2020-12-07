class player{
    constructor(){
        this.name=null;
        this.distance=0;
        this.index=null;
    }
    getCount(){
        var playercountref= database.ref('playerCount');
        playercountref.on("value",function(data){playerCount = data.val()});
    }
    updateCount(count){
        database.ref('/').update({playerCount: count});
        
    }
    update(){
       var playerIndex = "players/player" +this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance:this.distance
        })
    }

    //player1.update()
    //Player.getplayerInfo();
    //static func. is used to call all players info rather than only 1 players
    static getPlayerInfo(){
        var playerInforef = database.ref('players');
        console.log("playerInfo")
        playerInforef.on("value",(data)=>{
        allPlayers = data.val();
        })
        console.log(allPlayers)
    }
}

/*Multiplayer:
gameState
playerCount
players - Player1- name, distance
        - Player2- 
        -Player3- 
        
        [0][0],[0][1]
        [1][0],[1][1]
        [2][0],[2][1]*/
