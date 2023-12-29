import lenis from "./lenis";

const burgerBtn = document.querySelector(".burger");
const menu = document.getElementById("menu");
const header = document.querySelector(".header");
const menuLinkRepair = document.querySelector(".menu__nav-link--repair");
const menuLinkServ = document.querySelector(".menu__nav-link--service");
const menuRepair = document.querySelector(".menu__rep");
const menuRepBack = document.querySelector(".menu__rep-back");
const menuServ = document.querySelector(".menu__serv");
const menuServBack = document.querySelector(".menu__serv-back");
const menuItems = document.querySelectorAll(".menu--item");
const menuMobLink = document.querySelector(".header__mob-link");

burgerBtn.addEventListener("click", () => {
  if (burgerBtn.classList.contains("active")) {
    burgerBtn.classList.remove("active");
    menu.classList.remove("active");
    header.classList.remove("is-active");
    setTimeout(() => {
      header.classList.remove("is-white");
    }, 250);
    menuRepair.classList.remove("active");
    menuServ.classList.remove("active");
    lenis.destroy();
    document.querySelector("body").style.overflow = "hidden";
  } else {
    header.classList.add("is-white");
    burgerBtn.classList.add("active");
    setTimeout(() => {
      menu.classList.add("active");
      header.classList.add("is-active");
    }, 250);
    lenis.start();
    document.querySelector("body").style.overflow = "visible";
  }
});

menuLinkRepair.addEventListener("click", (e) => {
  e.preventDefault();
  menuRepair.classList.add("active");
});

menuRepBack.addEventListener("click", () => {
  menuRepair.classList.remove("active");
});

menuLinkServ.addEventListener("click", (e) => {
  e.preventDefault();
  menuServ.classList.add("active");
});

menuServBack.addEventListener("click", () => {
  menuServ.classList.remove("active");
});

menuItems.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    burgerBtn.classList.remove("active");
    menu.classList.remove("active");
    menuRepair.classList.remove("active");
    menuServ.classList.remove("active");
    document.querySelector("body").style.overflow = "visible";
  });
});

menuMobLink.addEventListener("click", () => {
  burgerBtn.classList.remove("active");
  menu.classList.remove("active");
  menuRepair.classList.remove("active");
  menuServ.classList.remove("active");
  document.querySelector("body").style.overflow = "visible";
});
