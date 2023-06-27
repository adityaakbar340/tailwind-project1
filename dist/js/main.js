const hamburgerButton = document.querySelector('#hamburger-button');
const navMenu = document.getElementById('nav-menu');

hamburgerButton.addEventListener('click', function () {
  navMenu.classList.toggle('block');
  navMenu.classList.toggle('hidden');
  hamburgerButton.classList.toggle("hamburger-active");
});


// window.addEventListener("DOMContentLoaded", (event) => {
//   const el = document.getElementById('hamburger-button');
//   if (el) {
//     el.addEventListener('click', () => alert('aktif'));
//   }
// });