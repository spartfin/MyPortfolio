var write = document.querySelector(".modal-button");
var popup = document.querySelector(".write-to-us");
var close = popup.querySelector(".modal-close");
var names = popup.querySelector("[name=name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=e-mail]");
var textarea = popup.querySelector("[name=textarea]");
var buttonDesign = document.querySelector(".slider-controls_design");
var buttonFormulas = document.querySelector(".slider-controls_formulas");
var buttonWork = document.querySelector(".slider-controls_work");

write.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  names.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!names.value || !email.value || textarea.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });
});

buttonDesign.addEventListener("click", function (evt) {
  evt.preventDefault();
  buttonFormulas.classList.remove("active");
  buttonWork.classList.remove("active");
  buttonDesign.classList.add("active");
});

buttonFormulas.addEventListener("click", function (evt) {
  evt.preventDefault();
  buttonDesign.classList.remove("active");
  buttonWork.classList.remove("active");
  buttonFormulas.classList.add("active");
});

buttonWork.addEventListener("click", function (evt) {
  evt.preventDefault();
  buttonFormulas.classList.remove("active");
  buttonDesign.classList.remove("active");
  buttonWork.classList.add("active");
});

$('.slider-controls_formulas').click(function () {
  $('.slider-list_formulas').css("display", "block");
  $('.slider-list_design').css("display", "none");
  $('.slider-list_work').css("display", "none");
});

$('.slider-controls_design').click(function () {
  $('.slider-list_design').css("display", "block");
  $('.slider-list_formulas').css("display", "none");
  $('.slider-list_work').css("display", "none");
});

$('.slider-controls_work').click(function () {
  $('.slider-list_work').css("display", "block");
  $('.slider-list_formulas').css("display", "none");
  $('.slider-list_design').css("display", "none");
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.querySelectorAll(".slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
};


