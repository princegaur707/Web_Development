const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');//getContext gives access to canvas tags 2D drawing functions
pen.fillStyle = 'yellow';

const cs = 67;//cell size
const W = 1200;
const H = 735;
let food = null;
let score = 0;

const snake = {
    init_len: 5,//initial length of snake
    direction: 'right',
    cells:[], //for position of every cell of snake

    createSnake: function() {//for storing positions of every cell in cells[]
        for(let i = 0; i < this.init_len; i++) {
            this.cells.push({
                x: i,
                y: 0
            });
        }
    },
    drawSnake: function() {//will loop for every cell positions and draw them with pen
        for(let cell of this.cells) {
            pen.fillRect(cell.x*cs, cell.y*cs, cs-1, cs-1);//multiplying by cs as to get the next box aside of last
            //-1 so that every cell have some space b/w them
        }
    },
    updateSnake: function(){

        //getting the value of head of snake i.e last cell in array 
        const headX = this.cells[this.cells.length - 1].x;//as cells are stored in cells array
        const headY = this.cells[this.cells.length - 1].y;

        //collision of head of snake with food
        if(headX === food.x && headY === food.y) {
           food = getRandomFood(); 
           score++;
        }
        else{//Not removing cell when snake eats food
            //using shift function to remove first cell of snake(tail)
            this.cells.shift();//we are removing to give the illusion of snake moving
        }

        let nextX;//coordinates of new cell
        let nextY;

        if(this.direction === 'down'){
            nextX = headX;
            nextY = headY + 1;

            if(nextY*cs >= H){
                pen.fillStyle = 'red';
                pen.fillText('Game Over', 100, 100);
                clearInterval(id);
            }
        }

        else if(this.direction === 'up'){
            nextX = headX;
            nextY = headY - 1;

            if(nextY*cs < 0){
                pen.fillStyle = 'red';
                pen.fillText('Game Over', 100, 100);
                clearInterval(id);
            }
        }

        else if(this.direction === 'left') {
            nextX = headX - 1;
            nextY = headY;

            if(nextX*cs < 0){
                pen.fillStyle = 'red';
                pen.fillText('Game Over', 100, 100);
                clearInterval(id);
            }
        }
        else {//if(this.direction === 'right')
            nextX = headX + 1;
            nextY = headY;

            if(nextX*cs >= W){
                pen.fillStyle = 'red';
                pen.fillText('Game Over',100, 100);
                clearInterval(id);
            }
        }

        //using push function to add cell at head of snake
        this.cells.push({
            x: nextX,
            y: nextY
        });
    }
}

//This is going to initialize the game
function init() {
    snake.createSnake();
    food = getRandomFood();
    function keyPressed(e) {
        if(e.key === 'ArrowDown') {
            snake.direction = 'down';
        }
        else if(e.key === 'ArrowLeft') {
            snake.direction = 'left';
        }
        else if(e.key === 'ArrowUp'){
            snake.direction = 'up';
        }
        else if(e.key === 'ArrowRight'){
            snake.direction = 'right';
        }
        console.log(snake.direction);
    }
    document.addEventListener('keydown', keyPressed);//applying event listener on while document
    //keydown worked but not keypress. KeyPressed is call back function
}

function update() {
    snake.updateSnake();
}

//Draw snake onto the canvas
function draw(){
    pen.clearRect(0, 0, W, H);
    pen.font = '40px sans-serif';
    pen.fillText(`Score: ${score}`, 100, 50);
    pen.fillStyle = 'blue';
    pen.fillRect(food.x * cs, food.y * cs, cs, cs);//Multiplying by cell size 
    pen.fillStyle = 'yellow';
    snake.drawSnake();
}
 
function gameLoop() {//As we have to keep switching between these two according to predefined rules
    draw();
    update();
}

function getRandomFood() {
    const foodX = Math.round(Math.random() * (W - cs)/cs);//Decreasing by cs otherwise head will go out of boundary
    const foodY = Math.round(Math.random() * (H - cs)/cs);//Dividing by cs so that food will come to the propotionate of head of snake

    food = {
        x: foodX, 
        y: foodY
    }
    return food;
}

init();
// gameLoop();
const id = setInterval(gameLoop, 200);//we get the id from setInterval
// clearInterval(id)//for stoping the interval