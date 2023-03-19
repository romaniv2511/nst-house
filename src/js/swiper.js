import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/swiper.min.css';
// import 'swiper/swiper.css';
// import 'swiper/swiper-bundle.css';


// init Swiper:
  const swiper = new Swiper('.swiper', {
  modules: [Navigation],

    // Optional parameters
    loop: true,



    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar

  });