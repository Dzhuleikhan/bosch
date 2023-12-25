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

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  menu.classList.toggle("active");
  header.classList.toggle("active");
  if (burgerBtn.classList.contains("active")) {
    menuRepair.classList.remove("active");
    menuServ.classList.remove("active");
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
  });
});
