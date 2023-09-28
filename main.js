// const burgerMenu = document.querySelector(".page-header-top__toggle");
// const siteNav = document.querySelector(".page-header__site-nav");
// const overlay = document.querySelector(".page-header__overlay");

// burgerMenu.addEventListener("click", () => {
//   burgerMenu.classList.toggle("active");
//   siteNav.classList.toggle("active");
//   overlay.classList.toggle("active");
// });

// overlay.addEventListener("click", () => {
//   overlay.classList.remove("active");
//   burgerMenu.classList.remove("active");
//   siteNav.classList.remove("active");
// });

// document.querySelectorAll(".site-nav__link").forEach((n) =>
//   n.addEventListener("click", () => {
//     burgerMenu.classList.remove("active");
//     siteNav.classList.remove("active");
//     overlay.classList.remove("active");
//   })
// );

const burgerMenu = document.querySelector(".page-header__menu");
const siteNav = document.querySelector(".page-header__site-nav");
const overlay = document.querySelector(".page-header__overlay");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  siteNav.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  burgerMenu.classList.remove("active");
  siteNav.classList.remove("active");
});

document.querySelectorAll(".site-nav__link").forEach((n) =>
  n.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    siteNav.classList.remove("active");
    overlay.classList.remove("active");
  })
);
