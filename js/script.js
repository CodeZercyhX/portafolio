// Efecto de cambio de color en el título
const heroTitle = document.querySelector('#hero h1');
let colors = ['#00ffea', '#ff00ff', '#00ff00'];
let colorIndex = 0;

setInterval(() => {
    heroTitle.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}, 1000);

// Efecto de animación al hacer scroll
const projectCards = document.querySelectorAll('.project-card');

window.addEventListener('scroll', () => {
    projectCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
            card.style.transform = 'scale(1)';
            card.style.opacity = '1';
        } else {
            card.style.transform = 'scale(0.9)';
            card.style.opacity = '0.5';
        }
    });
});
