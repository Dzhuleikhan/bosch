const modelsMoreBtn = document.querySelector(".model__more-btn");
const modelsList = document.querySelector(".model__list");

if (modelsMoreBtn) {
  modelsMoreBtn.addEventListener("click", () => {
    modelsMoreBtn.style.display = "none";
    modelsList.classList.add("active");
    modelsList.style.maxHeight = modelsList.scrollHeight + "px";
  });
}
