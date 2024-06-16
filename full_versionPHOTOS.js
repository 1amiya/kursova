// let currentSlide = 0;
// const slides = document.querySelectorAll('.slide');
// const slideWidth = slides[0].clientWidth;

// function goToSlide(slideNumber) {
//   if (slideNumber < 0 || slideNumber >= slides.length) return;
//   currentSlide = slideNumber;
//   const offset = -slideWidth * currentSlide;
//   document.querySelector('.slides').style.transform = `translateX(${offset}px)`;
// }

// setInterval(() => {
//   currentSlide = (currentSlide + 1) % slides.length;
//   goToSlide(currentSlide);
// }, 3000); // Зміна кожні 3 секунди


/*NEW JS STARTS*/
const sliderNews = document.querySelector('.sliderNews');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slidesNews = document.querySelectorAll('.slideNews');
let currentIndex = 0;

function goToSlideNews(index) {
    currentIndex = index;
    const offset = -currentIndex * 100;
    sliderNews.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        goToSlideNews(currentIndex - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < slidesNews.length - 1) {
        goToSlideNews(currentIndex + 1);
    }
});
/* */