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

const hero = document.querySelector('.hero');
const header = document.querySelector('.header');
const btn = document.querySelector('.mobile-menu__btn')
const cb = function(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      header.classList.add('inview');
      btn.classList.add('inview');
    } else {
      header.classList.remove('inview');
      btn.classList.remove('inview');
    }
  });
}

const io = new IntersectionObserver(cb);
io.observe(hero);

const el = document.querySelector("#ityped")

ityped.init(el, {
  strings: ["Hello, World! ","Welcome to my Portfolio Site!","I'm rattsl. Developer, creator.","Enjoy This Website!","RATTSL.COM"],
  startDelay: 200,
  typeSpeed: 90,
  loop: false,
  backSpeed:  60,
  backDelay:  300,
  showCursor: true,
  cursorChar: "|",
})