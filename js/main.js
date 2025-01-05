// document.addEventListener("DOMContentLoaded", function () {
//   document
//     .getElementById(".header-burger-btn")
//     .addEventListener("click", function () {
//       document.querySelector("header").classList.toggle("is-open");
//     });
// });

document
  .querySelector(".header-burger-btn")
  .addEventListener("click", function () {
    this.classList.toggle("is-open");
    document.querySelector(".modal-burger.is-open").classList.toggle("is-open");
  });
