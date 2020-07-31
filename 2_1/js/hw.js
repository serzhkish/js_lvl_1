'use strict';

let mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  speed: 300,
  effect: "flip", // "slide", "fade", "cube", "coverflow" or "flip"
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})