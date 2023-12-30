import lenis from "./lenis";

const repairLink = document.querySelector(".header__nav-link--repair");
const serviceLink = document.querySelector(".header__nav-link--service");
const overlay = document.querySelector(".overlay");
const repairMenu = document.querySelector(".repair");
const serviceMenu = document.querySelector(".service__menu");

// Repair
repairLink.addEventListener("mouseover", (e) => {
  if (repairLink.classList.contains("is-open")) {
    return false;
  } else {
    document.getElementById("header").classList.add("is-white");
    setTimeout(() => {
      overlay.classList.add("is-open");
      serviceMenu.classList.add("is-open");
      repairMenu.classList.add("is-open");
    }, 200);
    lenis.destroy();
    document.querySelector("body").style.overflow = "hidden";
  }
});
repairMenu.addEventListener("mouseleave", () => {
  if (serviceLink.classList.contains("is-opem")) {
    return false;
  } else {
    repairMenu.classList.remove("is-open");
    overlay.classList.remove("is-open");
    serviceMenu.classList.remove("is-open");
    document.querySelector("body").style.overflow = "visible";
    setTimeout(() => {
      document.getElementById("header").classList.remove("is-white");
    }, 400);
  }
});
// Service
serviceLink.addEventListener("mouseover", (e) => {
  document.getElementById("header").classList.add("is-white");
  setTimeout(() => {
    overlay.classList.add("is-open");
    repairMenu.classList.remove("is-open");
    serviceMenu.classList.add("is-open");
  }, 200);
  lenis.destroy();
  document.querySelector("body").style.overflow = "hidden";
});
serviceMenu.addEventListener("mouseleave", () => {
  setTimeout(() => {
    document.getElementById("header").classList.remove("is-white");
  }, 200);
  repairMenu.classList.remove("is-open");
  overlay.classList.remove("is-open");
  serviceMenu.classList.remove("is-open");
  document.querySelector("body").style.overflow = "visible";
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    repairMenu.classList.remove("is-open");
    overlay.classList.remove("is-open");
    serviceMenu.classList.remove("is-open");
    document.querySelector("body").style.overflow = "visible";
  }
});
