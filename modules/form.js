import Inputmask from "inputmask";

var tels = document.querySelectorAll(".input-telephone");

var im = new Inputmask("+7 (999) 999-99-99");

tels.forEach((tel) => {
  im.mask(tel);
});

const form = document.querySelectorAll(".page-form");
const formModalBtn = document.querySelectorAll(".modal-btn");
const formOverlay = document.querySelector(".form");
const formModal = document.querySelector(".form__modal");
const thankModal = document.querySelector(".thank__modal");
const formModalClose = document.querySelectorAll(".form__modal-close");

formModalBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    formOverlay.classList.add("is-open");
    formModal.classList.remove("hidden");
    document.querySelector("body").style.overflow = "hidden";
  });
});

formModalClose.forEach((el) => {
  el.addEventListener("click", () => {
    formOverlay.classList.remove("is-open");
    formModal.classList.add("hidden");
    document.querySelector("body").style.overflow = "visible";
  });
});

formOverlay.addEventListener("click", (e) => {
  if (e.target === formOverlay) {
    formOverlay.classList.remove("is-open");
    formModal.classList.remove("hidden");
    document.querySelector("body").style.overflow = "visible";
  }
});

form.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("has sent");
          formModal.classList.add("hidden");
          thankModal.classList.remove("hidden");
        }
      }
    };

    xhr.open("POST", "mail.php", true);
    xhr.send(formData);
    form.reset();
    console.log(formData);
  });
});
