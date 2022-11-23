var canvas;
var backgroundImage, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];
var coins,fuels,obstacles;
var obs1,obs2
var blastIMG

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/pista.png");
  coinsImg = loadImage('../assets/goldCoin.png');
  fuelImg = loadImage('../assets/fuel.png');
  obs1 = loadImage('../assets/obstacle1.png')
  obs2 = loadImage('../assets/obstacle2.png')
  lifeImg = loadImage('../assets/life.png')
  blastIMG = loadImage('../assets/blast.png')
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
