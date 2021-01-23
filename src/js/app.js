
import Typed from 'typed.js/src/typed';
import SmoothScroll from 'smooth-scroll';

import './header';
import './reviews';
import './feedback';
import './planshet';
import './tabs';
import './portfolio'
import './motion'
import './team'

/*
window.addEventListener('load', event => {

  setTimeout(() => {
    document.getElementById('ctn-preloader').classList.add('loaded');
    document.body.classList.remove('no-scroll-y');

  }, 2000)

  setTimeout(() => {
    document.getElementById('ctn-preloader').style.display = 'none';
  },2700)



  
})

*/

let bgVideo = document.getElementById('video-bg');
  let mainVideo = 'images/content/mc2.mp4';
  let mobileVideo = 'images/content/bg.mp4';

  if(screen.width > 500) {
    bgVideo.setAttribute('src', 'images/content/mc2.mp4');
  } else {
    bgVideo.setAttribute('src', 'images/content/bg.mp4');
  }


  bgVideo.play();

let options = {
  strings: [`digital &amp; media agency`],
  typeSpeed: 100,
  showCursor: false,
  startDelay: 100
};

let typed = new Typed('.home-info__subtitle', options);


let scroll = new SmoothScroll('a[href*="#"]');

let menu = document.querySelector('.mobile-navigation');

menu.addEventListener('click', (event) => {
  let target = event.target;
  if (target.closest('.burger')) {
    document.body.classList.toggle('menu-active')
  }

  if (target.tagName === 'A') {
    document.body.classList.toggle('menu-active')
  }
})






import '../scss/app.scss'