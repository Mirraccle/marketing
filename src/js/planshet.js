let menu = [
    'МАРКЕТИНГОВЫЕ ИССЛЕДОВАНИЯ',
    'SMM – ПРОДВИЖЕНИЕ',
    'РАЗРАБОТКА САЙТА',
    'SEO – ОПТИМИЗАЦИЯ',
    'КОНТЕКСТНАЯ РЕКЛАМА',
    'РЕМАРКЕТИНГ',
    'БРЕНДИНГ',
    'НЕЙМИНГ',
    'ФИРМЕННЫЙ СТИЛЬ',
    'MOTION – АНИМАЦИИ',
    'НАРУЖНАЯ РЕКЛАМА',
    'АВТОМАТИЗАЦИЯ БИЗНЕСА',
    'РАЗРАБОТКА СТИКЕРОВ',
]

let type = [
    'marketing',
    'smm',
    'website',
    'seo',
    'context',
    'remarketing',
    'branding',
    'naming',
    'style',
    'motion',
    'out',
    'avtomatic',
    'sticker'
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