const slides = [
    '<div><img src="img/baby-yoda.svg" alt="Baby Yoda"></div>',
    '<div><img src="img/banana.svg" alt="Banana"></div>',
    '<div><img src="img/girl.svg" alt="Girl"></div>',
    '<div><img src="img/viking.svg" alt="Viking"></div>',
];

let currentIdx = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.product-carousel__slide');
    slideContainer.innerHTML = slides[currentIdx];
    if (window.matchMedia('(min-width: 768px)').matches) {
        const secondSlideIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.matchMedia('(min-width: 980px)').matches) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
        }
    }
}

renderSlide();

function nextSlide() {
    currentIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
    renderSlide();
}

function prevSlide() {
    currentIdx = currentIdx - 1 <  0 ? slides.length - 1 : currentIdx - 1;
    renderSlide();
}

// setInterval(nextSlide, 3000);

const btnNext = document.querySelector('.product-carousel__btn-next');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.product-carousel__btn-prev');
btnPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);



