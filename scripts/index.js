// scripts.js

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
let intervalId; // Variável para armazenar o intervalo

function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
    resetCarouselInterval(); // Reiniciar o intervalo quando o usuário clicar no botão
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
    resetCarouselInterval(); // Reiniciar o intervalo quando o usuário clicar no botão
}

// Função para iniciar ou reiniciar o intervalo de troca automática de slides
function resetCarouselInterval() {
    clearInterval(intervalId); // Limpar o intervalo anterior
    intervalId = setInterval(nextSlide, 5000); // Iniciar um novo intervalo de 5 segundos
}

// Iniciar o carrossel automaticamente
resetCarouselInterval(); // Chama para iniciar o carrossel assim que a página carrega
