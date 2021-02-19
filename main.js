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
  if ($car.className === 'east') {
    $car.style.left = $car.x + 5 + 'px';
  }
  if ($car.className === 'west') {
    $car.style.left = $car.x - 5 + 'px';
  }
  if ($car.className === 'north') {
    $car.style.top = $car.y - 5 + 'px';
  }
  if ($car.className === 'south') {
    $car.style.top = $car.y + 5 + 'px';
  }
}

addEventListener('keydown', direction);
