var $car = document.querySelector('img');
var intervalID = null;

function direction(event) {
  var arrowKey = event.key;
  switch (arrowKey) {
    case 'ArrowUp':
      $car.className = 'north';
      break;
    case 'ArrowDown':
      $car.className = 'south';
      break;
    case 'ArrowLeft':
      $car.className = 'west';
      break;
    case 'ArrowRight':
      $car.className = 'east';
      break;
    case ' ':
      intervalID = setInterval(driveCar, 16);
      break;
  }
}

function driveCar() {
  $car.style.left = $car.x + 5 + 'px';
}

addEventListener('keydown', direction);
