// script.js

let currentImageIndex = 0;
const images = [
    'picture-vie/anhamthuchue.jpg',
];

const texts = [
    '', // Only this text will be displayed
    '',
    '',
    '',
    ''
];

const originalLogo = 'picture-vie/logo-original.png';
const scrolledLogo = 'picture-vie/logoimg.png';


function updateBackground() {
    const backgroundImage = document.getElementById('backgroundImage');
    const textOverlay = document.getElementById('textOverlay');
    backgroundImage.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    textOverlay.innerHTML = texts[currentImageIndex];
}

// Initialize the first image
updateBackground();


// Function to change navbar style on scroll
function onScroll() {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.logo img');
    const backgroundHeight = document.querySelector('.background-image').clientHeight;

    if (window.scrollY > backgroundHeight) {
        navbar.classList.add('scrolled');
        logo.src = scrolledLogo;

    } else {
        navbar.classList.remove('scrolled');
        logo.src = originalLogo;
    }
}

// Attach scroll event listener
window.addEventListener('scroll', onScroll);

