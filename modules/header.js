const navbar = document.getElementById("header");

let lastScrollTop = 100;

window.addEventListener(
  "scroll",
  () => {
    var { scrollY } = window;
    if (scrollY > lastScrollTop) {
      navbar.classList.remove("is-visible");
      navbar.classList.remove("active");
    } else if (scrollY < lastScrollTop) {
      navbar.classList.add("is-visible");
      navbar.classList.add("active");
      navbar.classList.remove("is-white");
    } else if (scrollY >= 1) {
      navbar.classList.add("is-white");
    } else {
      navbar.classList.remove("is-white");
    }

    lastScrollTop =
      scrollY <= 100 ? navbar.classList.remove("active") : scrollY;
  },
  { passive: true }
);
