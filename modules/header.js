const navbar = document.getElementById("header");

let lastScrollTop = 0;

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
    }

    lastScrollTop = scrollY <= 0 ? navbar.classList.remove("active") : scrollY;
  },
  { passive: true }
);
