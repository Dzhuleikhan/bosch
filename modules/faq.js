const accItems = document.querySelectorAll(".acc__item");

accItems.forEach((acc) => {
  acc.addEventListener("click", () => {
    acc.classList.toggle("active");
  });
});
