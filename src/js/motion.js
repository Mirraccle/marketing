const { default: Swiper } = require("swiper");

let motionSlider = new Swiper ('.motion-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
})