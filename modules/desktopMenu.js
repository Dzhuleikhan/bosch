import Lenis from "@studio-freight/lenis";
import lenis from "./lenis";

const topHeader = document.getElementById("header");
const repairLink = document.querySelector(".header__nav-link--repair");
const serviceLink = document.querySelector(".header__nav-link--service");
const overlay = document.querySelector(".overlay");
const repairMenu = document.querySelector(".repair__menu");
const serviceMenu = document.querySelector(".service__menu");

// // Repair
repairLink.addEventListener("mouseenter", (e) => {
  if (!repairMenu.classList.contains("active")) {
    serviceMenu.classList.remove("active");
    repairMenu.classList.add("active");
    topHeader.classList.add("is-white");
    lenis.destroy();
    document.querySelector("body").classList.add("stop-scroll");
  } else {
    repairMenu.classList.remove("active");
    topHeader.classList.remove("is-white");
    document.querySelector("body").classList.remove("stop-scroll");
  }
});
repairMenu.addEventListener("mouseleave", () => {
  repairMenu.classList.remove("active");
  topHeader.classList.remove("is-white");
  document.querySelector("body").classList.remove("stop-scroll");
});

serviceLink.addEventListener("mouseenter", (e) => {
  if (!serviceMenu.classList.contains("active")) {
    repairMenu.classList.remove("active");
    serviceMenu.classList.add("active");
    topHeader.classList.add("is-white");
    lenis.destroy();
    document.querySelector("body").classList.add("stop-scroll");
  }
});

serviceMenu.addEventListener("mouseleave", () => {
  serviceMenu.classList.remove("active");
  repairMenu.classList.remove("active");
  topHeader.classList.remove("is-white");
  document.querySelector("body").classList.remove("stop-scroll");
});
