// Main app

var game = new Game();
var turn = true;
var tiles = [];
var winningCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
var currentTarget = null;
var turnsPlayed = 0;

function init() {
    var i = 0;
    var tds = document.querySelectorAll('td');

    game.setMessage('X starts!');

    for (i = 0; i < tds.length; i++) {
        tiles.push(tds[i]);
        tiles[i].addEventListener('click', function(e) {
            currentTarget = e.currentTarget;
            update();
        });
    }
}

function update() {
    var i = 0;
    var write = null;
    var currentChar = game.getCurrentChar(turn);
    var hasWon = false;

    if (game.checkTile(currentTarget)) {
        write = game.play(turn);
        currentTarget.classList.add(write.class);
        currentTarget.innerText = write.char;
        turnsPlayed++;

        for (i = 0; i < winningCombinations.length; i++) {
            if (game.checkForWinners(tiles, winningCombinations[i], currentChar)) {
                hasWon = true;
                break;
            }
        }
        if (hasWon) {
            alert(currentChar + ' has won!');
            window.location.reload(true);
        } else {
            if (game.isGameFuckedUp(turnsPlayed)) {
                alert('You guys fucked up the game.');
                window.location.reload(true);
            }
        }

        turn = !turn;
        currentChar = turn ? 'X' : 'O';

        game.setMessage(currentChar + ' plays.');
    } else {
        game.setMessage('This tile is already used!');
    }
}

window.onload = function() {
    init();
}
