document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");
    let restartButton = document.getElementById("restartButton");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    });

    restartButton.addEventListener('click', restartGame);
});

function handleClick(event) {
    let square = event.target;
    let position = square.id;


    

    if (handleMove(position)) {
        setTimeout(() => {
            alert("O Jogo Acabou - O vencedor foi o Jogador " + (playerTime + 1));
        }, 10);
    }

    updateSquares();
}

function updateSquares() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`;
        } else {
            square.innerHTML = '';
        }
    });
}

function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;
    updateSquares();
}
