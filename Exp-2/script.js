function createBoard() {
    let boardSize = document.getElementById('boardsize').value;
    let displayChess = document.getElementById('displayBoard');
    
    displayChess.style.height = `${boardSize * 100}px`;
    displayChess.style.width = `${boardSize * 100}px`;
    
    let row, col;
    for (row = 0; row < boardSize; row++) {
        for (col = 0; col < boardSize; col++) {
            let box = document.createElement('div');
            box.className = 'box1';
            if ((row + col) % 2 == 0) {
                box.classList.add('white');
                box.innerText = '*';
            }
            else {
                box.classList.add('black');
                box.innerText = '#';
            }
            displayChess.appendChild(box);
        }
    }
    document.getElementById('boardsize').value = '';
}