
Game = new LevelController();
        Game.initLevel1();

        //Keyboard event bindings
        window.addEventListener('keydown', goodGuyMovement, false);

   function goodGuyMovement(event) {

        var code = event.keyCode;
        
        switch (code) {
            case 37:Game.goodGuy.moveLeft();break; //Left key         
            case 38: Game.goodGuy.moveUp();break; //Up key
            case 39: Game.goodGuy.moveRight();break; //Right key
            case 40: Game.goodGuy.moveDown();break; //Down key
            default: break; //Everything else, do nothing           
        
        } 

        for (var i = 0;i < Game.badGuys.length;i++){

            if (Game.badGuys[i].attemptKill()){
                Game.goodGuy.move(Game.goodGuy.startX, Game.goodGuy.startY);
                break;   
            }
        }
    }
    
         // Game heartbeat is defined here
        window.setInterval(heartBeat, 125); 
    function heartBeat() {

    if (Game.goodGuy.evalWin()){
        Game.win();
    }
 
    for (var i = 0;i < Game.badGuys.length;i++){
        
        if (Game.badGuys[i].attemptKill()){
            Game.goodGuy.move(Game.goodGuy.startX, Game.goodGuy.startY);
            break;   
        }

       Game.badGuys[i].moveRandom();
        
        if (Game.badGuys[i].attemptKill()){
            Game.goodGuy.move(Game.goodGuy.startX, Game.goodGuy.startY);
            break;   
        }
    }
} 