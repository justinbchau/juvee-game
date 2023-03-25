const juvee = document.getElementById('juvee');
const obstacle = document.getElementById('obstacle');
const startGameButton = document.getElementById('startGameButton');

let gameRunning = false;

const canImages = [
  'img/blueRazz.png',
  'img/kiwiStraw.png',
  'img/tropicalCrush.png',
  'img/watermelonLime.png',
];
// Function to change the selected can
function selectCan(index) {
  // const juvee = document.getElementById('juvee');
  juvee.style.background = `url(${canImages[index]})`;
  juvee.style.backgroundSize = '50px 50px'; // Ensure the background size remains the same
}

function displayCanImages() {
  const canSelection = document.getElementById('canSelection');

  canImages.forEach((imgSrc, index) => {
    const can = document.createElement('img');
    can.src = imgSrc;
    can.style.width = '50px';
    can.style.height = '50px';
    can.style.margin = '10px';
    can.style.cursor = 'pointer';
    can.setAttribute('data-index', index);

    can.addEventListener('click', function () {
      selectCan(index);
      console.log('clicked');
    });

    canSelection.appendChild(can);
  });
}

// Call the function to display the can images
displayCanImages();

function jump() {
  if (juvee.classList != 'jump') {
    juvee.classList.add('jump');

    setTimeout(function () {
      juvee.classList.remove('jump');
    }, 300);
  }
}

function startGame() {
  if (obstacle.classList != 'startedGame') {
    gameRunning = true;
    obstacle.classList.add('startedGame');

    let isAlive = setInterval(function () {
      // get current juvee Y position

      let juveeTop = parseInt(
        window.getComputedStyle(juvee).getPropertyValue('top')
      );

      // get current obstacle X position

      let obstacleLeft = parseInt(
        window.getComputedStyle(obstacle).getPropertyValue('left')
      );

      // detect collision

      if (obstacleLeft < 50 && obstacleLeft > 0 && juveeTop >= 140) {
        alert('Game Over!');
        obstacle.classList.remove('startedGame');
      }
    }, 10);

    document.addEventListener('keydown', function (event) {
      if (gameRunning) {
        jump();
      }
    });
  }
}

startGameButton.addEventListener('click', startGame);
