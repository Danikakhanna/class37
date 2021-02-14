class Player{
    constructor(){
    this.index=null;
    this.name=null;
    this.distance=0;
    }
    getCount(){
        var playerCountNode=database.ref("playerCount")
        playerCountNode.on("value",function(data){
            playerCount=data.val()
        })
    }
    updateCount(count){
        database.ref('/').set({
            playerCount:count
        })
    }
    update(){
var playerIndex="players/player"+this.index
     database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
    })}
    static getPlayerInfo(){
        var playerInfo=database.ref("player")
        playerInfo.on("value",function(data){
            allPlayers=data.val()
        })
    }
}