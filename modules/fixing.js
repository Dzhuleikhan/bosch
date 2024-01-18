const fixingTab = document.querySelector(".fixing__tab");
const fixingTabBtns = document.querySelectorAll(".fixing__tab-btn");
const fixingContent = document.querySelectorAll(".fixing__content");

if (fixingTab) {
  fixingTab.addEventListener("click", (e) => {
    if (e.target.classList.contains("fixing__tab-btn")) {
      let tab = e.target.getAttribute("data-tab");
      fixingTabBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      fixingContent.forEach((c) => {
        c.classList.remove("active");
      });
      document.querySelector(`.fixing__content-${tab}`).classList.add("active");
    }
  });
}
