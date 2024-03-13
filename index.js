const board = document.getElementById('board');
    const cells = Array.from({ length: 9 });

    let currentPlayer = 'X';
    let winner = null;

    // Inisialisasi papan permainan
    cells.forEach((_, index) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = index;
        cell.addEventListener('click', () => handleCellClick(index));
        board.appendChild(cell);
        cells[index] = cell;
    });

    // Fungsi untuk mengatasi klik sel
    function handleCellClick(index) {
        if (winner || cells[index].textContent !== '') return;

        cells[index].textContent = currentPlayer;
        if (checkWinner()) {
            winner = currentPlayer;
            alert(`Player ${winner} menang!`);
        } else if (checkDraw()) {
            alert('Permainan Seri!');
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    // Fungsi untuk memeriksa pemenang
    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // baris
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // kolom
            [0, 4, 8], [2, 4, 6]              // diagonal
        ];

        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return cells[a].textContent &&
                cells[a].textContent === cells[b].textContent &&
                cells[a].textContent === cells[c].textContent;
        });
    }

    // Fungsi untuk memeriksa seri
    function checkDraw() {
        return cells.every(cell => cell.textContent !== '');
    }