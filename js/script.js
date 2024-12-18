const startButton = document.getElementById('start-button');
const menu = document.getElementById('container-menu');
const cartas = document.getElementById('container-cartas');
const victoryScreen = document.getElementById('victory-screen');
const restartButton = document.getElementById('restart-button');

let flippedCards = [];
let lockBoard = false;
let matchedCards = 0; // Variável para contar as cartas combinadas

startButton.addEventListener('click', () => {
    menu.classList.add('hidden');
    cartas.classList.remove('hidden');
    cartas.classList.add('flex');
});

document.querySelectorAll('.carta').forEach(card => {
    card.addEventListener('click', () => {
        if (lockBoard) return; // Bloqueia interações durante a verificação
        if (flippedCards.includes(card)) return; // Evita virar a mesma carta duas vezes

        card.classList.add('flip');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            checkForMatch();
        }
    });
});

function checkForMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.card === card2.dataset.card) {
        // Cartas iguais
        disableCards();
        matchedCards += 2; // Incrementa o número de cartas combinadas
        checkVictory(); // Verifica se todas as cartas foram combinadas
    } else {
        // Cartas diferentes
        unflipCards();
    }
}

function disableCards() {
    // Remove o evento de clique das cartas acertadas
    flippedCards.forEach(card => card.removeEventListener('click', handleCardClick));
    resetBoard();
}

function unflipCards() {
    // Aguarda 1 segundo antes de desvirar as cartas
    lockBoard = true;
    setTimeout(() => {
        flippedCards.forEach(card => card.classList.remove('flip'));
        resetBoard();
    }, 1000);
}

function resetBoard() {
    // Reseta as variáveis para continuar o jogo
    flippedCards = [];
    lockBoard = false;
}

function handleCardClick() {
    // Placeholder para permitir que `removeEventListener` funcione corretamente
}

// Função para verificar vitória
function checkVictory() {
    // Verifica se o número de cartas combinadas é igual ao número total de cartas
    const totalCards = document.querySelectorAll('.carta').length;
    if (matchedCards === totalCards) {
        showVictoryMessage();
    }
}

// Função para exibir a mensagem de vitória
function showVictoryMessage() {
    const victoryMessage = document.getElementById('victory-message');
    victoryMessage.classList.remove('hidden');
    victoryMessage.classList.add('visible');
}

// Lógica para reiniciar o jogo
function restartGame() {
    const victoryMessage = document.getElementById('victory-message');
    victoryMessage.classList.remove('visible');
    victoryMessage.classList.add('hidden');
    resetGameState();
    matchedCards = 0; // Reseta as cartas combinadas
    console.log("Jogo reiniciado!");
}

// Função para resetar o estado do jogo
function resetGameState() {
    // Reseta o estado do tabuleiro e do jogo
    document.querySelectorAll('.carta').forEach(card => {
        card.classList.remove('flip');
        card.addEventListener('click', handleCardClick); // Adiciona o evento novamente
    });
    console.log("Estado do jogo resetado.");
}

// Eventos e inicialização
document.addEventListener('DOMContentLoaded', () => {
    restartButton.addEventListener('click', restartGame);
});
