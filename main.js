var $car = document.querySelector('img');
var intervalID = null;

function direction(event) {
  var key = event.key;
  switch (key) {
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
  }
  if (key === ' ' && intervalID === null) {
    intervalID = setInterval(driveCar, 16);
  } else {
    clearInterval(intervalID);
    intervalID = null;
  }
}

function driveCar() {
  $car.style.left = $car.x + 5 + 'px';
}

addEventListener('keydown', direction);
