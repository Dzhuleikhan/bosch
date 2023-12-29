import lenis from "./lenis";

const repairLink = document.querySelector(".header__nav-link--repair");
const serviceLink = document.querySelector(".header__nav-link--service");
const overlay = document.querySelector(".overlay");
const repairMenu = document.querySelector(".repair");
const serviceMenu = document.querySelector(".service__menu");

function openOverylay() {
  overlay.classList.add("is-open");
}
function closeOverylay() {
  overlay.classList.remove("is-open");
}

function closeAllMenus() {
  closeOverylay();
  closeRepairMenu();
  closeServiceMenu();
}

function openRepairMenu() {
  repairMenu.classList.add("is-open");
  document.getElementById("header").classList.add("is-white");
}
function closeRepairMenu() {
  repairMenu.classList.remove("is-open");
  document.getElementById("header").classList.remove("is-white");
}
function openServiceMenu() {
  serviceMenu.classList.add("is-open");
  document.getElementById("header").classList.add("is-white");
}
function closeServiceMenu() {
  serviceMenu.classList.remove("is-open");
  document.getElementById("header").classList.remove("is-white");
}

repairLink.addEventListener("mouseenter", (e) => {
  e.preventDefault();
  if (!repairMenu.classList.contains("is-open")) {
    openOverylay();
    closeServiceMenu();
    openRepairMenu();
    lenis.stop();
  } else {
    closeAllMenus();
    lenis.start();
  }
});
repairMenu.addEventListener("mouseleave", () => {
  closeAllMenus();
  lenis.start();
});
serviceLink.addEventListener("mouseenter", (e) => {
  e.preventDefault();
  if (!serviceMenu.classList.contains("is-open")) {
    openOverylay();
    closeRepairMenu();
    openServiceMenu();
    lenis.stop();
  } else {
    closeAllMenus();
    lenis.start();
  }
});
serviceMenu.addEventListener("mouseleave", () => {
  closeAllMenus();
  lenis.start();
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closeAllMenus();
    lenis.start();
  }
});
