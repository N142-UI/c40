class Game {
    constructor(){}
  
getState(){
var gsref = database.ref('gameState')
gsref.on("value",function(data){
         gameState =data.val()
})}

update(state){
    database.ref('/').update({
        gameState:state
    })
}
async start(){

    if(gameState === 0){
        player = new Player()
        var playerCountref= await database.ref('playerCount').once("value")
        if(playerCountref.exists()){
            playerCount = playerCountref.val()
            player.getCount()
        }
       
        form = new Form()
        form.display()
    }
    car1=createSprite(100,200)
    car1.addImage(c1img)
    car2=createSprite(300,200)
    car2.addImage(c2img)
    car3=createSprite(500,200)
    car3.addImage(c3img)
    car4=createSprite(700,200)
    car4.addImage(c4img)
    cars=[car1,car2,car3,car4]
}
play(){
        
    form.hide()
    //textSize(30)
    //text("GAME START",120,100)
    Player.getPlayerInfo()
    if(allPlayers!==undefined){
        background("lightblue")
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
        //var display_position=130
        var index = 0;
        var x=200;
        var y=0;
        for(var plr in allPlayers){

            index=index+1;
            x=x+220;
            y=displayHeight-allPlayers[plr].distance;
            cars[index-1].x=x;
            cars[index-1].y=y;
            if(index===player.index){
              stroke(5)
              fill("red")
              ellipse(x,y,80,50)
              cars[index-1].shapeColor="blue"
              camera.position.x=displayWidth/2
              camera.position.y=cars[index-1].y


            }

            /*if(plr === 'player'+player.index)
            fill("red")
            else
            fill("black")
            
            display_position+=20

            textSize(15)

            text(allPlayers[plr].name + "," + allPlayers[plr].distance,190,display_position)*/

        }
    }
    if(keyDown(UP_ARROW) && player.index!==null){
         player.distance+=50
         player.update()
    }
    if(player.distance>4278){
        gameState = 2
    }
    drawSprites()
}
   end(){
       
    console.log("GAME ENDED" + player.distance)
  }
}

