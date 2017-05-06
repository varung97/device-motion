window.addEventListener('deviceorientation', function(event) {
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;

    if (alpha!=null || beta!=null || gamma!=null) {
        dataContainerOrientation.innerHTML = 'alpha: ' + alpha + '<br/>beta: ' + beta + '<br />gamma: ' + gamma;
    } else {
        dataContainerOrientation.innerHTML = 'No device orientation data'
    }
}, false);
