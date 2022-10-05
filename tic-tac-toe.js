//"use strict";
var gamePlayed = false;

window.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('#board');
    const newGameBtn = document.querySelector('.btn');

    newGameBtn.addEventListener('click', e => {
        e.preventDefault();
        if (gamePlayed === false) {
            for (var i = 0; i <= 8; i++) {
                let newBox = document.createElement('div');
                newBox.id = ""+i;
                newBox.setAttribute('class', 'square');
                board.appendChild(newBox);
                newBox.addEventListener('click', clickSq);
                newBox.addEventListener('mouseover', mouseHover);
                newBox.addEventListener('mouseout', mouseOff);
            }
        } else {
            restartGame();
            newGameBtn.clickEvent;
        }
        gamePlayed = true;
        
        /*const sqContent = document.querySelector('.square');
        sqContent.addEventListener('click', e => {
        e.preventDefault;
        if (currPlayer == 'x') {
            sqContent.textContent = "x";
            sqContent.setAttribute('class', 'square.x');
            tracker.splice(parseInt(sqContent.id), 1, "x");
            currPlayer = 'y';

        } else {
            sqContent.textContent = 'o';
            sqContent.setAttribute('class', 'square.o');
            tracker.splice(parseInt(sqContent.id), 1, "o");
            currPlayer = 'x';
        }
    });*/
    });

});

let tracker = ['','','','','','','','',''];
let currPlayer = 'X';

function clickSq(clickEvent) {
    var clicked = clickEvent.target;
    if (currPlayer == 'X' && clicked.textContent == '') {
        clicked.textContent = currPlayer;
        clicked.classList.add(currPlayer);
        tracker.splice(parseInt(clicked.id), 1, currPlayer);
        checkWin();
        currPlayer = 'O';
    }
    if ((currPlayer == 'O' && clicked.textContent == '')) {
        clicked.textContent = currPlayer;
        clicked.classList.add(currPlayer);
        tracker.splice(parseInt(clicked.id), 1, currPlayer);
        checkWin();
        currPlayer = 'X';
    }
}

function mouseHover(hoverEvent) {
    var overSq = hoverEvent.target;
    overSq.classList.add('hover');
    if (overSq.textContent == 'O') {
        overSq.classList.add('O');
    }
}

function mouseOff(offEvent) {
    var offSq = offEvent.target;
    offSq.classList.remove('hover');
}

const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function checkWin() {
    let gameWon = false;
    gamePlayed = true;
    for (var i = 0; i<=7; i++) {
        const winCondition = winConditions[i];
        const x = tracker[winCondition[0]];
        const y = tracker[winCondition[1]];
        const z = tracker[winCondition[2]];
        if (x === '' || y === '' || z === '') {
            continue;
        }
        if (x === y && y === z) {
            gameWon = true;
            break;
        }
    }

    if (gameWon) {
        declareWin();
        return true;
    }

    if (!tracker.includes('')) {
        declareTie();
    }
}

function declareWin() {
    var message = document.getElementById('status');
    message.classList.add('you-won');
    message.textContent = "Congratulations! " +currPlayer+ " is the Winner!";
}

function declareTie() {
    var message = document.getElementById('status');
    message.textContent = "Oh No! You tied. Click New Game to play again.";
}

function restartGame() {
    var sqContent = document.getElementsByClassName('square');
    for (var i = 0; i<=8; i++) {
        sqContent[i].classList.remove('O');
        sqContent[i].classList.remove('X'); 
        sqContent[i].textContent = ''; 
    }

    var message = document.getElementById('status');
    message.classList.remove('you-won');
    message.textContent = "Move your mouse over a square and click to play an X or an O";
    gamePlayed = false;
    tracker = ['','','','','','','','',''];
}

