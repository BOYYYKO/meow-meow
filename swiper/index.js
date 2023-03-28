"use strict"
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 500,
    effect: 'slider',
    slidesPerView: 1,
    centeredSlides: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 2000,
    },
});