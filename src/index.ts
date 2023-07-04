import 'swiper/swiper-bundle.css';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Swiper from 'swiper';
import { EffectFade, Navigation } from 'swiper';

gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const heroSlider = new Swiper('[data-slider-hero]', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
  parallax: true,
  slidesPerView: 1,
  spaceBetween: 0,
  effect: 'fade',
  grabCursor: true,
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: '[data-hero-slider-controls="next"]',
    prevEl: '[data-hero-slider-controls="prev"]',
  },
  modules: [EffectFade, Navigation],
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ToursSlider = new Swiper('[data-slider-tour]', {
  loop: false,
  speed: 800,
  grabCursor: true,
  autoplay: {
    delay: 5000,
  },
  parallax: true,
  slidesPerView: 1.8,
  spaceBetween: 30,
  centeredSlides: true,
  //   autoHeight: true,
});
