import Swiper from "swiper";
import { Navigation, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const masterSlider = new Swiper(".master__slider", {
  modules: [Navigation, Scrollbar],
  spaceBetween: 10,
  slidesPerView: "auto",

  navigation: {
    prevEl: ".master-button-prev",
    nextEl: ".master-button-next",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const reviewSlider = new Swiper(".review__slider", {
  modules: [Navigation, Scrollbar],
  spaceBetween: 20,
  slidesPerView: "auto",

  navigation: {
    prevEl: ".review-button-prev",
    nextEl: ".review-button-next",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    320: {
      spaceBetween: 5,
    },
    550: {
      spaceBetween: 20,
    },
  },
});
