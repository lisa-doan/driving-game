var $car = document.querySelector('img');
var intervalID = null;

function direction(event) {
  var key = event.key;
  switch (true) {
    case (key === 'ArrowUp'):
      $car.className = 'north';
      break;
    case (key === 'ArrowDown'):
      $car.className = 'south';
      break;
    case (key === 'ArrowLeft'):
      $car.className = 'west';
      break;
    case (key === 'ArrowRight'):
      $car.className = 'east';
      break;
    case (' ') && (intervalID === null):
      intervalID = setInterval(driveCar, 16);
      break;
    case (' ') && (intervalID !== null):
      clearInterval(intervalID);
      intervalID = null;
      break;
  }
}

function driveCar() {
  $car.style.left = $car.x + 5 + 'px';
}

addEventListener('keydown', direction);
