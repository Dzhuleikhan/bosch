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
  setTimeout(() => {
    repairMenu.classList.add("is-open");
  }, 300);
}
function closeRepairMenu() {
  repairMenu.classList.remove("is-open");
}
function openServiceMenu() {
  setTimeout(() => {
    serviceMenu.classList.add("is-open");
  }, 300);
}
function closeServiceMenu() {
  serviceMenu.classList.remove("is-open");
}

repairLink.addEventListener("click", (e) => {
  e.preventDefault();
  if (!repairMenu.classList.contains("is-open")) {
    openOverylay();
    closeServiceMenu();
    openRepairMenu();
  } else {
    closeAllMenus();
  }
});
repairMenu.addEventListener("mouseleave", () => {
  closeAllMenus();
});
serviceLink.addEventListener("click", (e) => {
  e.preventDefault();
  if (!serviceMenu.classList.contains("is-open")) {
    openOverylay();
    closeRepairMenu();
    openServiceMenu();
  } else {
    closeAllMenus();
  }
});
serviceMenu.addEventListener("mouseleave", () => {
  closeAllMenus();
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closeAllMenus();
  }
});
