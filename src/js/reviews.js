import 'swiper/css/swiper.min.css';
import Swiper from 'swiper';


let reviews = new Swiper('.reviews-slider', {
  spaceBetween: 100,
  speed: 1000,
  slidesPerView: 1,
  pagination: {
    el: '.reviews-pagination',
    type: 'bullets',
  },

  navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev',
  },
  loop: true,
  autoplay: {
    speed: 200,
    delay: 10000
  },

  breakpoints: {
    320: {
      spaceBetween: 0
    }
  }
});

let clients = new Swiper('.clients-slider', {
  slidesPerView: 6,
  speed: 3000,
  clickable: false,
  loop: true,
  autoplay: {
    delay: 30
  },

  breakpoints: {
    320: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 4
    },

    1200: {
      slidesPerView: 6
    }
  }

});

let services = new Swiper('.services-slider', {
  loop: true,
});
