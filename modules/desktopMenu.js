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
  }, 400);
}
function closeOverylay() {
  overlay.classList.remove("is-open");
  setTimeout(() => {
    document.getElementById("header").classList.remove("is-white");
  }, 400);
}

function closeAllMenus() {
  closeOverylay();
  closeRepairMenu();
  closeServiceMenu();
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
  if (!repairMenu.classList.contains("is-open")) {
    document.getElementById("header").classList.add("is-white");
    setTimeout(() => {
      openOverylay();
      closeServiceMenu();
      openRepairMenu();
    }, 200);
    lenis.destroy();
    document.querySelector("body").style.overflow = "hidden";
  } else {
    closeAllMenus();
    document.querySelector("body").style.overflow = "visible";
  }
});
repairMenu.addEventListener("mouseleave", () => {
  setTimeout(() => {
    document.getElementById("header").classList.remove("is-white");
  }, 200);
  closeAllMenus();
  document.querySelector("body").style.overflow = "visible";
});
serviceLink.addEventListener("mouseover", (e) => {
  e.preventDefault();
  if (!serviceMenu.classList.contains("is-open")) {
    document.getElementById("header").classList.add("is-white");
    setTimeout(() => {
      openOverylay();
      closeRepairMenu();
      openServiceMenu();
    }, 200);
    lenis.destroy();
    document.querySelector("body").style.overflow = "hidden";
  } else {
    closeAllMenus();
    document.querySelector("body").style.overflow = "visible";
  }
});
serviceMenu.addEventListener("mouseleave", () => {
  setTimeout(() => {
    document.getElementById("header").classList.remove("is-white");
  }, 200);
  closeAllMenus();
  lenis.start();
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closeAllMenus();
    lenis.start();
  }
});
