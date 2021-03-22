//starting position for pacman
let pos = 0;

//image arrays for animation
const pacArray = [
  ['images/PacMan1.png', 'images/PacMan2.png'],
  ['images/PacMan3.png', 'images/PacMan4.png'],
];

let direction = 0;

// This array holds all the pacmen
const pacMen = []; 

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10); // {x:?, y:?}
  let position = setToRandom(200);

  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = 'images/PacMan1.png';
  newimg.width = 100;

  // TODO: set position here
  newimg.style.top = position.x;
  newimg.style.left = position.y;
  
  // TODO add new Child image to game
  game.appendChild(newimg);

  // return details in an object
  return {
    position, 
    velocity, 
    newimg
  };
}

//focus is used for image array
let focus = 0;

function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;
    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
    focus = (focus + 1) % 2;

    if (item.velocity.x < 0){
      direction = 1;
      item.newimg.src = pacArray[direction][focus];
    } else {
      direction = 0;
      item.newimg.src = pacArray[direction][focus];
    }


});



  setTimeout(update, 200);
}

function checkCollisions(item) {
  // TODO: detect collision with all walls and make pacman bounce
  
    if (item.position.x + item.velocity.x + item.newimg.width >= window.innerWidth || item.position.x + item.velocity.x <= 0) {
      item.velocity.x = -item.velocity.x
    };

    if (item.position.y + item.velocity.y + item.newimg.height >= window.innerHeight || item.position.y + item.velocity.y <= 0) {
      item.velocity.y = -item.velocity.y
    };
        

}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}


