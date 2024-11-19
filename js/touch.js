const app = document.getElementById('app');

app.addEventListener('touchstart', function(e) {

  const touch = e.touches[0];

  const electricDiv = document.createElement('div');

  electricDiv.classList.add('electric');

  electricDiv.style.left = touch.pageX + 'px';

  electricDiv.style.top = touch.pageY + 'px';

  app.appendChild(electricDiv);

  // Remove the element after animation ends

  setTimeout(() => {

    electricDiv.remove();

  }, 500); // Matches the duration of the animation

});
