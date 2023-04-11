"use strict"
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 800,
    effect: 'slider',
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.showcaseSlider-next',
        prevEl: '.showcaseSlider-prev',
    },

    autoplay: {
        delay: 3000,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2.4,
        }
    },
});