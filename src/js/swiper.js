import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/swiper.min.css';
// import 'swiper/swiper.css';
// import 'swiper/swiper-bundle.css';


// init Swiper:
  const swiper = new Swiper('.gallery-swiper', {
  modules: [Navigation],

    // Optional parameters
    loop: true,


    // Navigation arrows
    navigation: {
      nextEl: '.gallery-button-next',
      prevEl: '.gallery-button-prev',
    },

    // And if we need scrollbar

  });

  const reviewSwiper = new Swiper(".reviewSwiper",{
    modules: [Navigation],
    loop: true,

    navigation: {
      nextEl: '.review-next',
      prevEl: '.review-prev',
    },

  })