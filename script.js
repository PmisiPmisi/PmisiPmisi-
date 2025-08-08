const kartya = document.getElementById('kartya');

kartya.addEventListener('mousedown', function(e) {
  function mozgat(event) {
    kartya.style.left = event.pageX + 'px';
    kartya.style.top = event.pageY + 'px';
  }

  document.addEventListener('mousemove', mozgat);

  document.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', mozgat);
  }, { once: true });
});

