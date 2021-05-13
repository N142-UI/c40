class Form {
    constructor(){
     this.input=createInput("Name")
     this.button=createButton('PLAY')
     this.greeting=createElement('h1')
     this.title = createElement('h1')
     this.reset =  createButton('RESET')
  
    }
     hide(){
         this.greeting.hide()
         this.button.hide()
         this.input.hide()
         this.title.hide()
        }

 display(){
    this.title.html("CAR RACING GAME")
    this.title.position(displayWidth/2-50,0)
     //var input = createInput("Name")
     this.input.position(displayWidth/2-40,displayHeight/2-80)
     //var button = createButton('PLAY')
     this.button.position(displayWidth/2+30,displayHeight/2)
     this.reset.position(displayWidth-100,50)

     this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
         player.name = this.input.value()
        playerCount+=1
        player.index=playerCount
        player.updateCount(playerCount)
        player.update()
       //var greeting = createElement('h1')
        this.greeting.html("hellow" + player.name)
        this.greeting.position(displayWidth/2-70,displayHeight/4)
     })

     this.reset.mousePressed(()=>{
         player.updateCount(0)
         game.update(0)
     })

 }

}

