let currentSlide = 0;
const slides = document.querySelectorAll('.slide img');
const slideWidth = slides[0].clientWidth * 4; 
const totalSlides = slides.length / 4; 

function updateSlidePosition() {
    document.getElementById('slide').style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlidePosition();
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1;
    }
    updateSlidePosition();
}

setInterval(nextSlide, 3000);




