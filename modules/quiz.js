const quizContent = document.querySelector(".quiz");

const tabs = document.querySelectorAll(".quiz__tab");
const nextBtn = document.querySelector(".quiz__btn-next");
const prevBtn = document.querySelector(".quiz__btn-prev");
const submitBtn = document.querySelector(".quiz__submit-btn");

if (quizContent) {
  let currentTab = 0;
  showTab(currentTab); // Display the current tab

  function showTab(n) {
    var x = document.querySelectorAll(".quiz__tab");
    x[n].style.display = "block";
    if (n == 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "block";
    }
    if (n == x.length - 1) {
      nextBtn.style.display = "none";
      prevBtn.style.display = "none";
      submitBtn.style.display = "block";
    }
  }

  function nextPrev(n) {
    var x = document.querySelectorAll(".quiz__tab");
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;

    showTab(currentTab);
  }

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    nextPrev(1);
  });
  prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    nextPrev(-1);
  });
}

const quizForm = document.getElementById("quiz-form");

if (quizForm) {
  quizForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = new FormData(quizForm);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("has sent");
          document.querySelector(".form").classList.add("is-open");
          formModal.classList.add("hidden");
          thankModal.classList.remove("hidden");
        }
      }
    };

    xhr.open("POST", "https://test.neff-remont.ru/api/order_handler.php", true);
    xhr.send(formData);
    quizForm.reset();
    console.log(formData);
  });
}
