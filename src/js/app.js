
import Typed from 'typed.js/src/typed';
import SmoothScroll from 'smooth-scroll';

import './header';
import './reviews';
import './feedback';
import './planshet';
import './tabs';
import './portfolio'
import './motion'

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



var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var particlesOnScreen = 245;
var particlesArray = [];
var w,h;
w = canvas.width = window.innerWidth;
h = canvas.height = window.innerHeight;

function random(min, max) {
    return min + Math.random() * (max - min + 1);
};

function clientResize(ev){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
};
window.addEventListener("resize", clientResize);

function createSnowFlakes() {
    for(var i = 0; i < particlesOnScreen; i++){
        particlesArray.push({
            x: Math.random() * w,  
            y: Math.random() * h,  
            opacity: Math.random(),  
            speedX: random(-11, 11),  
            speedY: random(7, 15),    
            radius:random(0.5, 4.2),
        })
    }
};

function drawSnowFlakes(){
    for(var i = 0; i < particlesArray.length; i++){    
        var gradient = ctx.createRadialGradient(  
            particlesArray[i].x,   
            particlesArray[i].y,   
            0,                     
            particlesArray[i].x,   
            particlesArray[i].y,   
            particlesArray[i].radius  
            );

            gradient.addColorStop(0, "rgba(255, 255, 255," + particlesArray[i].opacity + ")");  // white
            gradient.addColorStop(.8, "rgba(210, 236, 242," + particlesArray[i].opacity + ")");  // bluish
            gradient.addColorStop(1, "rgba(237, 247, 249," + particlesArray[i].opacity + ")");   // lighter bluish
          
            ctx.beginPath(); 
            ctx.arc(
            particlesArray[i].x,  
            particlesArray[i].y,  
            particlesArray[i].radius,  
            0,                         
            Math.PI*2,                 
            false                     
            );

        ctx.fillStyle = gradient;   
        ctx.fill();                 
    }
};

function moveSnowFlakes(){
    for (var i = 0; i < particlesArray.length; i++) {
        particlesArray[i].x += particlesArray[i].speedX;     
        particlesArray[i].y += particlesArray[i].speedY;     

        if (particlesArray[i].y > h) {                                                                               
            particlesArray[i].x = Math.random() * w * 1.5;
            particlesArray[i].y = -50;
        }
    }
};

function updateSnowFall  () {
    ctx.clearRect(0, 0, w, h);
    drawSnowFlakes();
    moveSnowFlakes();
};

setInterval(updateSnowFall,50);
createSnowFlakes();


import '../scss/app.scss'