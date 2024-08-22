let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    if (index >= totalSlides) slideIndex = 0;
    if (index < 0) slideIndex = totalSlides - 1;
    document.getElementById(`slide${slideIndex + 1}`).checked = true;
}

function moveSlide(n) {
    showSlide(slideIndex += n);
}

// Auto slide functionality
setInterval(() => moveSlide(1), 3000); // Muda o slide a cada 3 segundos
