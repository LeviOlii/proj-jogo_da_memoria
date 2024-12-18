const startButton = document.getElementById('start-button');
const menu = document.getElementById('container-menu');
const cartas = document.getElementById('container-cartas')

startButton.addEventListener('click', ()=>{
    menu.classList.add('hidden');
    cartas.classList.remove('hidden');
    cartas.classList.add('flex');
})