window.addEventListener('deviceorientation', function(event) {
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;

    if (alpha!=null || beta!=null || gamma!=null) {
        // dataContainerOrientation.innerHTML = 'alpha: ' + alpha + '<br/>beta: ' + beta + '<br />gamma: ' + gamma;
    } else {
        // dataContainerOrientation.innerHTML = 'No device orientation data'
    }
}, false);

window.addEventListener('resize', setBoardDims, true);

function init() {
    setBoardDims();
    showBoard();
}

function setBoardDims() {
    var board = document.getElementById('board');
    var square_side = null;
    if (window.innerHeight < window.innerWidth) {
        square_side = window.innerHeight - 20;
    } else {
        square_side = window.innerWidth - 20;
    }

    board.style.height = square_side + 'px';
    board.style.width = square_side + 'px';
}

function showBoard() {
    var board = document.getElementById('board');
    board.style.display = 'block';
}
