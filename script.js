const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].clientWidth;

let slideIndex = 1;

slidesContainer.append(slides[0].cloneNode(true));
slidesContainer.prepend(slides[slides.length - 1].cloneNode(true));
slidesContainer.style.transform = `translateX(-${slideWidth}px)`;

function moveSlide(dir) {
    slideIndex += dir;
    slidesContainer.style.transition = 'transform 0.5s ease';
    slidesContainer.style.transform = `translateX(-${slideWidth * slideIndex}px)`;

    slidesContainer.addEventListener('transitionend', function resetPosition() {
        if (slideIndex <= 0) slideIndex = slides.length;
        if (slideIndex > slides.length) slideIndex = 1;
        slidesContainer.style.transition = 'none';
        slidesContainer.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
        slidesContainer.removeEventListener('transitionend', resetPosition);
    });
}

setInterval(() => moveSlide(1), 3000);
