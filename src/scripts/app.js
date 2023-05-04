"use strict";

// burger menu

const menuButton = document.querySelector('.nav__button');
const menu = document.querySelector('.menu');


menuButton.addEventListener('click', function () {
  menu.classList.toggle('show__menu');
  menuButton.classList.toggle('close');
});

const menu__el = document.querySelectorAll('.menu__el');

menu__el.forEach(part => {
  part.addEventListener('click', (e) => {
    menu.classList.toggle('show__menu');
    menuButton.classList.toggle('close');
  });
});

// Marquer la section active dans la navigation
const nav = document.querySelector('nav');
const sections = document.querySelectorAll('section');

function determineActiveSection() {
  sections.forEach(section => {
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop <= (windowHeight / 2) && sectionTop >= -(section.offsetHeight - (windowHeight / 2))) {
      const prevActiveSection = nav.querySelector('.menu__el--actif');
      if (prevActiveSection) {
        prevActiveSection.classList.remove('menu__el--actif');
      }
      const currentActiveSection = nav.querySelector(`a[href="#${section.id}"]`);
      if (currentActiveSection) {
        currentActiveSection.classList.add('menu__el--actif');
      }
    }
  });
}
window.addEventListener('load', determineActiveSection);
window.addEventListener('resize', determineActiveSection);
window.addEventListener('scroll', determineActiveSection);


//MASQUER ET AFFICHER LE NAVIGATION EN FONCTION DU SCROLL

let prevScrollpos = window.scrollY;
window.addEventListener("scroll", (scrollEvent) => {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".head").classList.remove("head--hide");
  } else {
    document.querySelector(".head").classList.add("head--hide");
  }
  prevScrollpos = currentScrollPos;
});

// année

let annee = new Date().getFullYear();
document.querySelector(".annee").innerHTML = annee;


// scroll annime

const divs = document.querySelectorAll('p');

function animateDivs() {
    for (let i = 0; i < divs.length; i++) {
        const divPosition = divs[i].getBoundingClientRect().top;
        const screenHeight = window.innerHeight / 1.3;
        if (divPosition < screenHeight) {
            divs[i].classList.add('show');
        }
    }
}

const title = document.querySelectorAll('h2');

function animateTitle() {
    for (let i = 0; i < title.length; i++) {
        const titlePosition = title[i].getBoundingClientRect().top;
        const screenHeight = window.innerHeight / 1.3;
        if (titlePosition < screenHeight) {
            title[i].classList.add('show-title');
        }
    }
}

window.addEventListener('scroll', animateDivs);
window.addEventListener('scroll', animateTitle);

/*
const elements = document.querySelectorAll('div, section');

function animateElements() {
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight / 1.3;
        if (elementPosition < screenHeight) {
            if (element.tagName === 'DIV') {
                element.classList.add('show');
            } else if (element.tagName === 'SECTION') {
                element.classList.add('show-two');
            }
        }
    });
}

window.addEventListener('scroll', animateElements);
*/