const priceInner = document.querySelector(".price__inner");
const priceMoreBtn = document.querySelector(".price__more-btn");

priceMoreBtn.addEventListener("click", () => {
  priceInner.classList.add("open");
  priceMoreBtn.style.display = "none";
});
