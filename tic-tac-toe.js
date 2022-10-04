//"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('#board');
    const newGameBtn = document.querySelector('.btn');
    
    newGameBtn.addEventListener('click', e => {
        e.preventDefault();
        for (var i = 0; i <= 8; i++) {
            let newBox = document.createElement('div');
            newBox.id = ""+i;
            newBox.setAttribute('class', 'square');
            board.appendChild(newBox);
            newBox.addEventListener('click', clickSq);
        }
        
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
let currPlayer = 'x';

function clickSq(clickEvent) {
    var clicked = clickEvent.target;
    if (currPlayer == 'x' && clicked.textContent == '') {
        clicked.textContent = "x";
        clicked.classList.add(currPlayer);
        tracker.splice(parseInt(clicked.id), 1, "x");
        currPlayer = 'o';

    }
    if ((currPlayer == 'o' && clicked.textContent == '')) {
        clicked.textContent = 'o';
        clicked.classList.add(currPlayer);
        tracker.splice(parseInt(clicked.id), 1, "o");
        currPlayer = 'x';
    }
}

