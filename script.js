const juvee = document.getElementById('juvee');
const obstacle = document.getElementById('obstacle');
const startGameButton = document.getElementById('startGameButton');

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
      jump();
    });
  }
}

startGameButton.addEventListener('click', startGame);
