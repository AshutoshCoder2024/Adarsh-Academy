const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.slider-arrow.prev');
const nextBtn = document.querySelector('.slider-arrow.next');
const navDots = document.querySelectorAll('.slider-nav .nav-dot');

let currentIndex = 0;
let autoSlideInterval;

// Update slide position
const updateSlider = () => {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    navDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
};

// Next slide
const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
};

// Previous slide
const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
};

// Navigation dots
navDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

// Auto-slide with pause on hover
const startAutoSlide = () => {
    autoSlideInterval = setInterval(nextSlide, 5000);
};

const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
};

slider.addEventListener('mouseenter', stopAutoSlide);
slider.addEventListener('mouseleave', startAutoSlide);

// Event listeners for arrows
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Initialize auto-slide
startAutoSlide();