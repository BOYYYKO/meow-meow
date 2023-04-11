
const swiper2 = new Swiper('.swiper-2', {
    loop: true,
    speed: 500,
    slidesPerView:1,
    slidesPerGroup: 1,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    autoplay: {
        delay: 2000,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2.5,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 800,
    effect: 'slider',
    spaceBetween: 20,

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