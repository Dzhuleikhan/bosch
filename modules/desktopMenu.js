import lenis from "./lenis";

const repairLink = document.querySelector(".header__nav-link--repair");
const serviceLink = document.querySelector(".header__nav-link--service");
const overlay = document.querySelector(".overlay");
const repairMenu = document.querySelector(".repair");
const serviceMenu = document.querySelector(".service__menu");

function openOverylay() {
  document.getElementById("header").classList.add("is-white");
  setTimeout(() => {
    overlay.classList.add("is-open");
  }, 200);
}
function closeOverylay() {
  overlay.classList.remove("is-open");
}

function closeAllMenus() {
  closeOverylay();
  closeRepairMenu();
  closeServiceMenu();
  setTimeout(() => {
    document.getElementById("header").classList.remove("is-white");
  }, 200);
}

function openRepairMenu() {
  repairMenu.classList.add("is-open");
}
function closeRepairMenu() {
  repairMenu.classList.remove("is-open");
}
function openServiceMenu() {
  serviceMenu.classList.add("is-open");
}
function closeServiceMenu() {
  serviceMenu.classList.remove("is-open");
}

repairLink.addEventListener("mouseover", (e) => {
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
serviceLink.addEventListener("mouseover", (e) => {
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
