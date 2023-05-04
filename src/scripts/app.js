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
