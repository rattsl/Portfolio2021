document.addEventListener('DOMContentLoaded', function(){
  const skills = new SkillsSlider();
})

class SkillsSlider{
  constructor(){
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 2,
      speed: 1000,
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        }
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      }
    });
  }
}