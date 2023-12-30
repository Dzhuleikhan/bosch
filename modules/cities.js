const citiesBtns = document.querySelectorAll(".location-btn");
const citiesOverylay = document.querySelector(".cities");
const citiesModalClose = document.querySelector(".cities__close");

citiesBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    citiesOverylay.classList.add("active");
  });
});
citiesModalClose.addEventListener("click", () => {
  citiesOverylay.classList.remove("active");
});

citiesOverylay.addEventListener("click", (e) => {
  if (e.target === citiesOverylay) {
    citiesOverylay.classList.remove("active");
  }
});
