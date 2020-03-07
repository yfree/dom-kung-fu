theMaxX = 30;
theMaxY = 10;
level = 0

class LevelController {
    constructor(){
    this.setLevel(1);            
    }

    setLevel(levelNumber){
    level = levelNumber;
    document.getElementById('level-box').innerHTML = 'Level: ' + levelNumber;
    }
    
    initLevel1(){
   
        var theWallList = [

        {"X": "2", "Y": "2"},
        {"X": "3", "Y": "2"},
        {"X": "4", "Y": "2"},
        {"X": "5", "Y": "2"},
        {"X": "6", "Y": "2"},        
        {"X": "7", "Y": "2"},
        {"X": "8", "Y": "2"},
        
        {"X": "15", "Y": "2"},
        {"X": "16", "Y": "2"},
        {"X": "17", "Y": "2"},
        {"X": "18", "Y": "2"},
        {"X": "19", "Y": "2"},
        {"X": "20", "Y": "2"},
        {"X": "21", "Y": "2"},
        {"X": "22", "Y": "2"},
        {"X": "23", "Y": "2"},
        {"X": "24", "Y": "2"},
        {"X": "25", "Y": "2"},
        {"X": "26", "Y": "2"},
        
        
        {"X": "2", "Y": "3"},
        {"X": "8", "Y": "3"},
        {"X": "14", "Y": "3"},
        {"X": "15", "Y": "3"},
        {"X": "26", "Y": "3"},
        
        {"X": "2", "Y": "4"},
        {"X": "8", "Y": "4"},
        {"X": "26", "Y": "4"},
      
        {"X": "2", "Y": "5"},
        {"X": "3", "Y": "5"},
        {"X": "4", "Y": "5"},
        {"X": "6", "Y": "5"},
        {"X": "7", "Y": "5"},
        {"X": "8", "Y": "5"},
        {"X": "14", "Y": "5"},
        {"X": "15", "Y": "5"},
        {"X": "26", "Y": "5"},

        {"X": "15", "Y": "6"},
        {"X": "26", "Y": "6"},

        {"X": "15", "Y": "7"},
        {"X": "26", "Y": "7"},
        
        {"X": "15", "Y": "8"},
        {"X": "26", "Y": "8"},

        {"X": "15", "Y": "9"},
        {"X": "16", "Y": "9"},
        {"X": "17", "Y": "9"},
        {"X": "18", "Y": "9"},
        {"X": "19", "Y": "9"},
        {"X": "20", "Y": "9"},
        {"X": "21", "Y": "9"},
        {"X": "22", "Y": "9"},
        {"X": "23", "Y": "9"},
        {"X": "24", "Y": "9"},
        {"X": "25", "Y": "9"},  
        {"X": "26", "Y": "9"}
        ];

    var winX = 25;
    var winY = 8;  

    this.gameBoard = new World(theWallList, winX, winY);
    this.gameBoard.createMap();

    this.goodGuy = new Creature("good-guy", 5, 3, winX, winY);
    
    this.badGuys = [];
    this.badGuys[0] = new Enemy("bad-guy", 21, 5, null, null, this.goodGuy.startX, this.goodGuy.startY);
}

initLevel2(){
   
   var theWallList = [
        {"X": "2", "Y": "2"},
        {"X": "3", "Y": "2"},
        {"X": "4", "Y": "2"},
        {"X": "22", "Y": "2"},
        {"X": "23", "Y": "2"},
        {"X": "24", "Y": "2"},
        {"X": "25", "Y": "2"},
        
        {"X": "2", "Y": "3"},
        {"X": "4", "Y": "3"},


        {"X": "10", "Y": "3"},
        {"X": "11", "Y": "3"},
        {"X": "12", "Y": "3"},
        {"X": "13", "Y": "3"},         
        {"X": "14", "Y": "3"},
        
        
        
        {"X": "19", "Y": "3"},
        {"X": "20", "Y": "3"},
        {"X": "21", "Y": "3"},
        {"X": "22", "Y": "3"},
        {"X": "25", "Y": "3"},
        
        {"X": "2", "Y": "4"},
        {"X": "4", "Y": "4"},
        {"X": "10", "Y": "4"},
        {"X": "14", "Y": "4"},
        {"X": "25", "Y": "4"},
        
        
        {"X": "2", "Y": "5"},
        {"X": "4", "Y": "5"},
        {"X": "10", "Y": "5"},
        {"X": "14", "Y": "5"},
        
        
        
        {"X": "19", "Y": "5"},
        {"X": "20", "Y": "5"},
        {"X": "21", "Y": "5"},
        {"X": "22", "Y": "5"},       
        {"X": "23", "Y": "5"},
        {"X": "24", "Y": "5"},
        {"X": "25", "Y": "5"},
        
        {"X": "2", "Y": "6"},
        {"X": "4", "Y": "6"},
        {"X": "10", "Y": "6"},
        {"X": "14", "Y": "6"},
        
        
        
        {"X": "2", "Y": "7"},
        {"X": "4", "Y": "7"},
        {"X": "5", "Y": "7"},
        {"X": "6", "Y": "7"},
        {"X": "10", "Y": "7"},
        {"X": "14", "Y": "7"},
        
        
        
        {"X": "2", "Y": "8"},
        {"X": "10", "Y": "8"},
        {"X": "14", "Y": "8"},
        
        
        
        {"X": "2", "Y": "9"},
        {"X": "10", "Y": "9"},
        {"X": "14", "Y": "9"},
        
        
        {"X": "2", "Y": "10"},
        {"X": "4", "Y": "10"},
        {"X": "5", "Y": "10"},
        {"X": "6", "Y": "10"}  
        ];

    var winX = 24;
    var winY = 3;  
	
    this.gameBoard = new World(theWallList, winX, winY);
    this.gameBoard.createMap();

    this.goodGuy = new Creature("good-guy", 3, 3, winX, winY);
    
    this.badGuys = [];
    this.badGuys[0] = new Enemy("bad-guy-blue", 9, 6, null, null, this.goodGuy.startX, this.goodGuy.startY);
        this.badGuys[1] = new Enemy("bad-guy", 24, 4, null, null, this.goodGuy.startX, this.goodGuy.startY);
}

initLevel3(){
   
   var theWallList = [
   
        {"X": "1", "Y": "1"},
        {"X": "5", "Y": "1"},
        {"X": "9", "Y": "1"},
        {"X": "14", "Y": "1"},
        {"X": "19", "Y": "1"},

        {"X": "1", "Y": "2"},
        {"X": "5", "Y": "2"},

        {"X": "14", "Y": "2"},
        
        {"X": "1", "Y": "3"},
        {"X": "5", "Y": "3"},
        {"X": "9", "Y": "3"},
        {"X": "14", "Y": "3"},
        {"X": "19", "Y": "3"},

        {"X": "1", "Y": "4"},
        {"X": "5", "Y": "4"},
        {"X": "9", "Y": "4"},
        {"X": "14", "Y": "4"},
        {"X": "19", "Y": "4"},

        {"X": "1", "Y": "5"},
        {"X": "5", "Y": "5"},
        {"X": "9", "Y": "5"},
        {"X": "14", "Y": "5"},
        {"X": "19", "Y": "5"},

        {"X": "1", "Y": "6"},
        {"X": "5", "Y": "6"},
        {"X": "9", "Y": "6"},
        {"X": "14", "Y": "6"},
        {"X": "19", "Y": "6"},

        {"X": "1", "Y": "7"},
        {"X": "5", "Y": "7"},
        {"X": "9", "Y": "7"},
        {"X": "14", "Y": "7"},
        {"X": "19", "Y": "7"},

        {"X": "1", "Y": "8"},
        {"X": "5", "Y": "8"},
        {"X": "9", "Y": "8"},
        {"X": "14", "Y": "8"},
        {"X": "19", "Y": "8"},
        
        {"X": "1", "Y": "9"},
        {"X": "9", "Y": "9"},
        {"X": "19", "Y": "9"},

        {"X": "1", "Y": "10"},
        {"X": "5", "Y": "10"},
        {"X": "9", "Y": "10"},
        {"X": "14", "Y": "10"},
        {"X": "19", "Y": "10"}
        
        ];

    var winX = 28;
    var winY = 7;  

    this.gameBoard = new World(theWallList, winX, winY);
    this.gameBoard.createMap();

    this.goodGuy = new Creature("good-guy", 2, 1, winX, winY);
    
    this.badGuys = [];
    this.badGuys[0] = new Enemy("bad-guy-blue", 28, 6, null, null, this.goodGuy.startX, this.goodGuy.startY);
    this.badGuys[1] = new Enemy("bad-guy", 27, 6, null, null, this.goodGuy.startX, this.goodGuy.startY);
    this.badGuys[2] = new Enemy("bad-guy", 26, 6, null, null, this.goodGuy.startX, this.goodGuy.startY);
    }

    destroyLevel(){

        var gameBoard = document.getElementById('game-board');
        gameBoard.parentNode.removeChild(gameBoard);
        this.badGuys = [];
    
    }
    win(){
    
        console.log('Player won!');

        if (level == 1){
            this.destroyLevel();
            this.initLevel2();
            this.setLevel(2);
        }
        
        else if (level == 2){
            this.destroyLevel();
            this.initLevel3();
            this.setLevel(3);
        }
        
        else if (level == 3){
            this.destroyLevel();
            this.setLevel(1);
            alert('You won the game!');
            location.reload();
        }
        
    }
       
}

class World {
    /* Accepts a Json Structure of where the walls are located */
    constructor (theWalls, winPosX, winPosY){
	    this.winX = winPosX;
        this.winY = winPosY;
        this.walls = theWalls;
    }

    createMap() {    

        this.addGameBoard();

        for (var row = 1;row <= theMaxY;row++){

            /* Create Game Board Rows */

            this.addGameRow(row);

            /*Create Game Board Cells */

            for (var cell = 1;cell <= theMaxX;cell++){

                this.addGameCell(row, cell);       

            }    
        }
        this.addWalls();
        this.addExit();
        
    }

    addGameBoard(){

        var node = document.createElement("div");

        node.id = "game-board";

        document.getElementById("board-wrapper").appendChild(node);

    }

    addGameRow(currentRow){

        var node = document.createElement("div");

        node.className = "game-row";

        node.id = "game-row-" + currentRow;

        document.getElementById("game-board").appendChild(node);

    }

    addGameCell(currentRow, currentCell){



        var node = document.createElement("div");

        node.className = "game-cell";

        node.id = "game-cell-" + currentRow + "-" + currentCell;

        document.getElementById("game-row-" + currentRow).appendChild(node);

    }


    addWalls(){
	var wallNode;
	var posY;
	var posX;
    	for(var i = 0;i < this.walls.length;i++){
	    posY = this.walls[i]['Y'];
	    posX = this.walls[i]['X'];	
          
            wallNode = document.getElementById("game-cell-" + posY + "-" + posX);
            wallNode.className += " wall";
        }
    }
    
    addExit(){

    	var exitNode = document.getElementById("game-cell-" + this.winY + "-" + this.winX);
        exitNode.className += " exit";
    }
}

 
class Creature {

    constructor(theCreatureName, thePosX, thePosY, theWinX, theWinY){

        this.creatureName = theCreatureName;
        this.creatureClass = theCreatureName;
        this.creatureClasses = [this.creatureClass,
                                this.creatureClass + '-left',
                                this.creatureClass + '-right',
                                this.creatureClass + '-back'];

        this.startX = thePosX;
        this.posX = thePosX;
        
        this.startY = thePosY;
        this.posY = thePosY;
        if (theWinX == undefined){
        
            theWinX = 0;
        }
        
        if (theWinY == undefined){
        
            theWinY = 0;
        }
        
        this.winX = theWinX;
        this.winY = theWinY;
        
        this.forbiddenX = 0;
        this.forbiddenY = 0;
        
        this.delayPlayerMovement = false;
        
	    var startPos = this.getCellNode(this.posX, this.posY);
	    this.populateCell(startPos);

    }

    populateCell(cellNode){
        
        cellNode.classList.add(this.creatureClass);
        cellNode.classList.add('creature');
        
    }

    

    getCellNode(thePosX, thePosY){

	//Y comes before X in the cell id name for readability, I use the standard X, Y for everything else
        var node = document.getElementById("game-cell-" + thePosY + "-" + thePosX);

        return node;

    }    

    getCurrentNode(){

	var currentPos = this.getCellNode(this.posX, this.posY);
        
        return currentPos;
    }
    
    toggleDelayMovement(delayFlag){
        this.delayPlayerMovement = false;
        //console.log('Player Movement Delay set to ' + this.delayPlayerMovement);
    }
    move(newX, newY){
        
        /* Don't allow the creature to move */ 
        if (this.delayPlayerMovement == true){
            return;
        }
	
        var oldCell = this.getCurrentNode();
	    var newCell = this.getCellNode(newX, newY);

	    //don't move to the new cell if it is a wall!
	    if (newCell.classList.contains("wall")){
            console.log('You cannot move into a wall!');
        }
        
        else if (newCell.classList.contains('creature')){
        console.log('You cannot move into a creature!');
        }
        
        else if (newX == this.forbiddenX && newY == this.forbiddenY){
                console.log('Cannot move into start position!');
            }
        
        else {

            for (var i = 0;i < this.creatureClasses.length;i++){         
                oldCell.classList.remove(this.creatureClasses[i]);
                oldCell.classList.remove('creature');
            }
	
	        this.populateCell(newCell);
	        this.posX = newX;
	        this.posY = newY;
        
            /* Delay the player movement */ 
            this.delayPlayerMovement = true;
            //console.log('Player Movement Delay set to ' + this.delayPlayerMovement);
            setTimeout(this.toggleDelayMovement.bind(this), 150);
        }

    }

    moveUp(){
        
        if (this.posY > 1){
            this.creatureClass = this.creatureName + "-back";
            this.move(this.posX, this.posY - 1);
        }
        else {
            console.log("Cannot move 'up' off the grid!");
        }
    }

    moveDown(){

        if (this.posY < theMaxY){
            this.creatureClass = this.creatureName;
            this.move(this.posX, this.posY + 1);
        }
        else {
            console.log("Cannot move 'down' off the grid!");
        }
    }
    
    moveLeft(){

        if (this.posX > 1){
            this.creatureClass = this.creatureName + "-left";
            this.move(this.posX - 1, this.posY);
        }
        else {
            console.log("Cannot move 'left' off the grid!");
        }
    }
    
    moveRight(){

        if (this.posX < theMaxX){
            this.creatureClass = this.creatureName + "-right";
            this.move(this.posX + 1, this.posY);
        }
        else {
            console.log("Cannot move 'right' off the grid!");
        }

    }
    
    
    evalWin(){
    
        if (this.posX == this.winX && this.posY == this.winY){
            return true;
        }
        return false;
    }
        
    attemptKill(){
    
            var surroundingCells = [];
            var killed = false;
            
            if (this.posY > 1){
         
                surroundingCells.push(this.getCellNode(this.posX, this.posY - 1));
            }
            
            
            if (this.posY < theMaxY){
                surroundingCells.push(this.getCellNode(this.posX, this.posY + 1));
            }
  
            if (this.posX > 1){
                surroundingCells.push(this.getCellNode(this.posX - 1, this.posY));
            }
            
            if (this.posX < theMaxX){            
                surroundingCells.push(this.getCellNode(this.posX + 1, this.posY));
            }

            for (var i = 0;i < surroundingCells.length;i++){

            if (surroundingCells[i].classList.contains("good-guy") || 
                surroundingCells[i].classList.contains("good-guy-back") || 
                surroundingCells[i].classList.contains("good-guy-left") || 
                surroundingCells[i].classList.contains("good-guy-right")) {

                    killed = true;
                    break;
                }

            }
            
            return killed;
    }

    moveRandom(){     

        var spacesToMove = [];

        var testCell;

        if (this.posY > 1){

            testCell = this.getCellNode(this.posX, this.posY - 1);

            if (!testCell.classList.contains("wall") && 
            !testCell.classList.contains("creature") &&
            !testCell.classList.contains("exit") && 
            (this.posX != this.forbiddenX && (this.posY - 1) != this.forbiddenY)){           
                     spacesToMove.push("up");
                 }
        }
        
        if (this.posY < theMaxY){

            testCell = this.getCellNode(this.posX, this.posY + 1);

            if (!testCell.classList.contains("wall") && 
                !testCell.classList.contains("creature")  &&
                !testCell.classList.contains("exit") && 
                (this.posX != this.forbiddenX && (this.posY + 1) != this.forbiddenY)){
                spacesToMove.push("down");
            }
        } 

        if (this.posX > 1){

            testCell = this.getCellNode(this.posX - 1, this.posY);

            if (!testCell.classList.contains("wall") && 
                !testCell.classList.contains("creature") &&
                !testCell.classList.contains("exit") && 
                ((this.posX - 1) != this.forbiddenX && this.posY != this.forbiddenY)){

                spacesToMove.push("left");
            }
        }

        if (this.posX < theMaxX){

            testCell = this.getCellNode(this.posX + 1, this.posY);

            if (!testCell.classList.contains("wall") && 
                !testCell.classList.contains("creature") &&
                !testCell.classList.contains("exit") && 
                ((this.posX + 1) != this.forbiddenX && this.posY != this.forbiddenY)){

                spacesToMove.push("right");
            }
        }

        var randomNumber = Math.floor((Math.random() * spacesToMove.length));

        switch (spacesToMove[randomNumber]){

            case "up": this.moveUp();break;
            case "down": this.moveDown();break;
            case "left": this.moveLeft();break; 
            case "right": this.moveRight();break;
            default: break;
        } 
    }
}

//Enemy cannot move into the player's start position, which is passed as paramters
class Enemy extends Creature {

    constructor(theCreatureName, thePosX, thePosY, theWinX, theWinY, theForbiddenX, theForbiddenY) {
    
    super(theCreatureName, thePosX, thePosY, theWinX, theWinY);
    this.forbiddenX = theForbiddenX;
    this.forbiddenY = theForbiddenY;
    
    }
}
