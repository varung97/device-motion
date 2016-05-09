window.addEventListener('devicemotion', function() {
  var x = event.acceleration.x;
  var y = event.acceleration.y;
  var z = event.acceleration.z;

  var ralpha = event.rotationRate.alpha;
  var rbeta = event.rotationRate.beta;
  var rgamma = event.rotationRate.gamma;

  var interval = event.interval;
});
