const placeContent = document.querySelectorAll(".place__content");

placeContent.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.target.classList.contains("place__cover-btn")) {
      el.classList.add("active");
    }
  });
});
