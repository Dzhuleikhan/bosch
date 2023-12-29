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

const mediaQuery = window.matchMedia("(max-width: 1330px)");

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    document.querySelector(".steps__inner").classList.add("steps__slider");
    document.querySelector(".steps__wrapper").classList.add("swiper-wrapper");
    document.querySelectorAll(".steps__item").forEach((el) => {
      el.classList.add("swiper-slide");
    });
    new Swiper(".steps__slider", {
      modules: [Scrollbar],
      slidesPerView: "auto",
      spaceBetween: 30,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  }
}

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);
