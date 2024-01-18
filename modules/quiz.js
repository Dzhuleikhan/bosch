const quizShowBtn = document.querySelector(".preview__start-btn");
const quizPreview = document.querySelector(".preview");
const quizContent = document.querySelector(".quiz");

if (quizShowBtn) {
  quizShowBtn.addEventListener("click", () => {
    quizPreview.style.display = "none";
    quizContent.classList.add("active");
  });
}

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
    // //   Progress
    if (n == 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "block";
    }
    if (n == x.length - 1) {
      nextBtn.style.display = "none";
      prevBtn.style.display = "none";
      submitBtn.style.display = "block";
      document.querySelector(".quiz__last-notification").style.display =
        "block";
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

    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("has sent");
          thankModal.classList.remove("hidden");
          quizPreview.style.display = "block";
          quizContent.classList.remove("active");
        }
      }
    };

    xhr.open("POST", "mail.php", true);
    xhr.send(formData);
    form.reset();
    console.log(formData);
  });
}