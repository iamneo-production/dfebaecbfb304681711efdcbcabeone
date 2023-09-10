let cells = ['', '', '', '', '', '', '', '', ''];
let Player = 'X';
let result = document.querySelector('.result');
let cellsButtons = document.querySelectorAll('.btn');
let resetButton = document.querySelector('#reset');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const ticTacToe = (index) => { 

    if (cells[index] !== '' || result.textContent.includes('won')) return;
    
    cells[index] = Player;
    cellsButtons[index].value = Player;
    cellsButtons[index].disabled = true;

   
    for (const condition of conditions) {
        const [a, b, c] = condition;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            result.textContent = `${Player} won 🎉`;
            return; 
        }
    }

    if (!cells.includes('')) {
        result.textContent = "It's a draw!";
        return;}

    Player = Player === 'X' ? 'O' : 'X';
    result.textContent = `: ${Player}`;
};

const resetGame = () => {
    cells = ['', '', '', '', '', '', '', '', ''];
    Player = 'X';
    result.textContent = 'Player X Turn';

    cellsButtons.forEach((button) => {
        button.value = '';
        button.disabled = false;
    });
};

cellsButtons.forEach((button, index) => {
    button.addEventListener('click', () => ticTacToe(index));
});

resetButton.addEventListener('click', resetGame);