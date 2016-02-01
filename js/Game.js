(function() {
    // The Game class containing the methods specificly used by the app.
    var Game = function() {
        this.play = function(turn) {
            if (turn) {
                return {
                    char: this.getCurrentChar(turn),
                    class: 'cross'
                }
            } else {
                return {
                    char: this.getCurrentChar(turn),
                    class: 'circle'
                }
            }
        };
        this.getCurrentChar = function(turn) {
            if (turn) {
                return 'X';
            } else {
                return 'O';
            }
        }
        this.checkTile = function(currentTarget) {
            if (currentTarget.innerText != '') {
                return false;
            }
            return true;
        }
        this.setMessage = function(msg) {
            document.querySelector('.messages').innerText = msg;
        }
        this.checkForWinners = function(tiles, winningCombinations, player) {
            var i = 0;
            var winnings = [false, false, false];
            var hasWon = false;

            for (i = 0; i < 3; i++) {
                if (tiles[(winningCombinations[i] - 1)].innerText == player) {
                    winnings[i] = true;
                }
            }

            if (winnings[0] && winnings[1] && winnings[2]) {
                hasWon = true;
            }
            return hasWon;
        }
        this.isGameFuckedUp = function(turnsPlayed) {
            if (turnsPlayed === 9) {
                return true;
            }
            return false;
        }
    }

    window.Game = Game;
}).call(this);
