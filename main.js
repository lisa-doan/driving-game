var $car = document.querySelector('img');

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
  }
}

window.addEventListener('keydown', direction);
