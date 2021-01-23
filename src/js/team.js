import 'swiper/css/swiper.min.css';
import Swiper from 'swiper';


let reviews = new Swiper('.team-slider', {
  spaceBetween: 10,
  speed: 5000,
  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
    clickable: true,
  },
  autoplay: {
    delay: 1,
  },
  freeMode: true,
  freeModeSticky: true,
  breakpoints: {
    1600: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
});