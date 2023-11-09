const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');
pen.fillStyle = 'red';//We need this as default color of rectange is black same as background

let init_x = 50;
let init_y = 50;


// This is going to initialize the game
function init() {
    pen.fillRect(init_x, init_y, 50, 50);//Draw rectangle at intx, inty of size 50px*50px
}

// update the properties of a game
function update() {
    init_x += 50;//we are going to move horizontally only for now
}


// Draw something on to the canvas
function draw() {
    pen.clearRect(0, 0, 1200, 735);//before making new, we are clearing older one
    pen.fillRect(init_x, init_y, 100, 100);//making rectangle at new position
}


// Game Loop
function gameLoop() {//since we have to keep switching between these update and draw
    console.log('Game Loop')
    update();
    draw();
}

init();


const id = setInterval(gameLoop, 200);//we get the id from setInterval
// clearInterval(id)//for stoping the interval







