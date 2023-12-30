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
  } else {
    repairMenu.classList.remove("active");
    topHeader.classList.remove("is-white");
  }
});
repairMenu.addEventListener("mouseleave", () => {
  repairMenu.classList.remove("active");
  topHeader.classList.remove("is-white");
});

serviceLink.addEventListener("mouseenter", (e) => {
  if (!serviceMenu.classList.contains("active")) {
    repairMenu.classList.remove("active");
    serviceMenu.classList.add("active");
    topHeader.classList.add("is-white");
  }
});

serviceMenu.addEventListener("mouseleave", () => {
  serviceMenu.classList.remove("active");
  repairMenu.classList.remove("active");
  topHeader.classList.remove("is-white");
});
