// function mobileNavbar(mobileMenu, navList, navLinks) {
//   const menu = document.querySelector(mobileMenu);
//   const list = document.querySelector(navList);
//   const links = document.querySelectorAll(navLinks);
//   const activeClass = "active";

//   function animateLinks() {
//     links.forEach((link, index) => {
//       link.style.animation
//         ? (link.style.animation = "")
//         : (link.style.animation = `navLinkFade 0.5s ease forwards ${
//             index / 7 + 0.3
//           }s`);
//     });
//   }

//   function handleClick(e) {
//     list.classList.toggle(activeClass);
//     animateLinks();
//   }

//   function addClickEvent() {
//     menu.addEventListener("click", handleClick);
//   }

//   return { init: addClickEvent };
// }

// const navbar = mobileNavbar(".menu-mobile", ".nav-list", ".nav-list li");

// navbar.init();

// Carousel

// const slides = document.querySelectorAll('[data-js="carousel__item"]')
// const nextButton = document.querySelector('[data-js="carousel__button--next"]')
// const prevButton = document.querySelector('[data-js="carousel__button--prev"]')

// let currentSlideIndex = 0;
// const lastSlideIndex = slides.length - 1;

// const manipulateSlideClasses = correctSlideIndex => {
//   slides.forEach(slide => slide.classList.remove('carousel__item--visible'))
//   slides[currentSlideIndex].classList.add('carousel__item--visible');
// }

// nextButton.addEventListener('click',  () => {

//    const correctSlideIndex = currentSlideIndex === lastSlideIndex
//    ? currentSlideIndex = 0
//    : ++currentSlideIndex
//   manipulateSlideClasses(correctSlideIndex)
// })

// // Quando o button for clicado ele vai remover a classe "carousel__item--visible" e add no item anterior
// prevButton.addEventListener('click', () => {

//   //  ao invés de usa o pós decremento(currentSlideIndex--), eu usei o pré decremento (--curretSlideIndex)
//  const correctSlideIndex = currentSlideIndex === 0
//  ? currentSlideIndex = lastSlideIndex
//  : --currentSlideIndex
//  manipulateSlideClasses(correctSlideIndex)
// })
// define constants for slide width and step size
const SLIDE_WIDTH = 150;
const STEP_SIZE = SLIDE_WIDTH;

// initialize slide position
let slidePosition = 0;

// get DOM elements
const btnRight = document.getElementById("btnright");
const btnLeft = document.getElementById("btnleft");
const slideContainer = document.getElementById("container");
const slideContainer2 = document.getElementById("container2");
const carrossel = document.getElementById("carrossel");
const limitador = document.getElementById("limitador");

// handle click event for right button
btnRight.addEventListener("click", () => {
  const limit = Math.round(limitador.getBoundingClientRect().left);
  const reference = Math.round(btnRight.getBoundingClientRect().left);
  if (limit > reference) {
    slidePosition -= STEP_SIZE;
    slideContainer.style.transform = `translateX(${slidePosition}px)`;
    slideContainer2.style.transform = `translateX(${slidePosition}px)`;
  } else {
    const stopPosition = Math.round(
      (reference * slideContainer.clientWidth) / carrossel.clientWidth -
        carrossel.clientWidth + 100
    );
    slidePosition = -stopPosition;
    slideContainer.style.transform = `translateX(${slidePosition}px)`;
    slideContainer2.style.transform = `translateX(${slidePosition}px)`;
  }
});

// handle click event for left button
btnLeft.addEventListener("click", () => {
  const reference = Math.round(btnLeft.getBoundingClientRect().left);
  if (slidePosition < reference) {
    slidePosition += STEP_SIZE;
    slideContainer.style.transform = `translateX(${slidePosition}px)`;
  } else {
    slidePosition = 0;
    slideContainer.style.transform = `translateX(${slidePosition}px)`;
    slideContainer2.style.transform = `translateX(${slidePosition}px)`;
  }
});
