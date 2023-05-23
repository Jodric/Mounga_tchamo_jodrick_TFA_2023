"use strict";


// burger menu

const menuButton = document.querySelector('.nav__button');
const menu = document.querySelector('.menu');
const imageBlock = document.querySelector('.image-block');


menuButton.addEventListener('click', function () {
  menu.classList.toggle('show__menu');
  menuButton.classList.toggle('close');
  imageBlock.classList.toggle('open');
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

const divs = document.querySelectorAll('.text');

function animateDivs() {
    for (let i = 0; i < divs.length; i++) {
        const divPosition = divs[i].getBoundingClientRect().top;
        const screenHeight = window.innerHeight / 1.3;
        if (divPosition < screenHeight) {
            divs[i].classList.add('show-text');
        }
    }
}

const title = document.querySelectorAll('.title--medium');

function animateTitle() {
    for (let i = 0; i < title.length; i++) {
        const titlePosition = title[i].getBoundingClientRect().top;
        const screenHeight = window.innerHeight / 1.3;
        if (titlePosition < screenHeight) {
            title[i].classList.add('show-title--medium');
        }
    }
}


const titleSmall = document.querySelectorAll('.title--small');

function animateTitleSmall() {
    for (let i = 0; i < titleSmall.length; i++) {
        const titlePosition2 = titleSmall[i].getBoundingClientRect().top;
        const screenHeight = window.innerHeight / 1.3;
        if (titlePosition2 < screenHeight) {
          titleSmall[i].classList.add('show-title--Small');
        }
    }
}
window.addEventListener('scroll', animateDivs);
window.addEventListener('scroll', animateTitle);
window.addEventListener('scroll', animateTitleSmall);

// afficher et masquer la synsthèse des rencontres

const activeButton = document.querySelector('.openbutton');
const tableauButton = document.querySelector('.openbutton__2');
const panel = document.querySelector('.voirPlus');
const tableau = document.querySelector('.voirPlus--tableau');

activeButton.addEventListener('click', () => {
  panel.classList.toggle('show');
});
tableauButton.addEventListener('click', () => {
  tableau.classList.toggle('show');
});


// darkmode


let buttondm = document.querySelector("#darkmode");
let theme = localStorage.getItem("theme");
let body = document.querySelector("#body");

buttondm.addEventListener("click", darkmode);

if (theme == "night") {
  night();
}

function darkmode() {
  if (body.classList.contains("day")) {
    night();
  } else if (body.classList.contains("night")) {
    day();
  }
}

function day() {
  body.classList.toggle("night");
  body.classList.toggle("day");
  buttondm.innerText = "Dark"
  localStorage.setItem("theme", "day");
}

function night() {
  body.classList.toggle("night");
  body.classList.toggle("day");
  buttondm.innerText = "Light"
  localStorage.setItem("theme", "night");
}











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

/*

// transition parallax


window.addEventListener('scroll', function() {
  var windowHeight = window.innerHeight;
  var scrollTop = window.pageYOffset;
  var sections = document.getElementsByClassName('parallax-section');

  for (var i = 0; i < sections.length; i++) {
    var sectionTop = sections[i].offsetTop;
    var sectionHeight = sections[i].clientHeight;
    var sectionBottom = sectionTop + sectionHeight;

    if (scrollTop >= sectionTop && scrollTop <= sectionBottom - windowHeight) {
      sections[i].style.transform = 'translateY(' + (scrollTop - sectionTop) * 0.5 + 'px)';
    }
  }
});

*/

