const carouselInner = document.querySelector(".inner-swiper");
const prevBtn = document.querySelector(".back");
const forwBtn = document.querySelector(".forw");
const slide = document.querySelector(".slide-item");
const totalSlides = slide.length;

function nextSlides() {
  carouselInner.style.transform = `translateX(${-1029}px)`;
}
forwBtn.addEventListener("click", nextSlides);
