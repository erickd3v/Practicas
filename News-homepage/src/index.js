const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.options-hdr');
const barras = document.querySelectorAll('.ham .image');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
});