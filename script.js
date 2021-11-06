let mobileMenu = document.querySelector(".mobileMenu");
let mobileModal = document.querySelector(".mobileModal");
let mobileBackdrop = document.querySelector(".mobileBackdrop");
let container = document.querySelector(".container");

mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("open");
  mobileModal.classList.toggle("open");
  mobileBackdrop.classList.toggle("open");
  container.classList.toggle("open");
});
