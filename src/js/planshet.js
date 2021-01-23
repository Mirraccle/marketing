let menu = [
    'ФИРМЕННЫЙ СТИЛЬ',
    'МАРКЕТИНГОВЫЕ ИССЛЕДОВАНИЯ',
    'SMM – ПРОДВИЖЕНИЕ',
    'РАЗРАБОТКА САЙТА',
    'SEO – ОПТИМИЗАЦИЯ',
    'КОНТЕКСТНАЯ РЕКЛАМА',
    'РЕМАРКЕТИНГ',
    'БРЕНДИНГ',
    'НЕЙМИНГ',
    'MOTION – АНИМАЦИИ',
    'НАРУЖНАЯ РЕКЛАМА',
    'АВТОМАТИЗАЦИЯ БИЗНЕСА',
    'РАЗРАБОТКА СТИКЕРОВ',
    'ВИДЕО - ПРОДАКШН'
]

let type = [
    'style',
    'marketing',
    'smm',
    'website',
    'seo',
    'context',
    'remarketing',
    'branding',
    'naming',
    'motion',
    'out',
    'avtomatic',
    'sticker',
    'studio'
]

import 'swiper/css/swiper.min.css';
import Swiper from 'swiper';

let serviceSwiper = new Swiper ('.services-swiper', {
    pagination: {
        el: '.swiper-pagination',
		clickable: true,
        renderBullet: function (index, className) {
          return '<span data-type="' + type[index] + '" class="tab-item ' + className + '"><h2>' + (menu[index]) + '</h2></span>';
        },
    },
    speed: 1200,
    // centeredSlides: true,
    // slidesPerView: 3,
    // spaceBetween: 50,
    // initialSlide: 1,
    // slideToClickedSlide: true,
})