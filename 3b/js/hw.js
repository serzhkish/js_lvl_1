'use strict';

// Получить модальное окно
let modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальное окно
let btn = document.getElementById("myBtn");

// Получить <span>, который закрывает модальное окно
let span = document.getElementsByClassName("close")[0];


btn.addEventListener('click', function() {
  modal.classList.remove('magictime', 'magic');
  modal.classList.add('magictime', 'puffIn');
  modal.style.display = "block";
});

span.addEventListener('click', function() {
  modal.classList.remove('magictime', 'puffIn');
  modal.classList.add('magictime', 'magic');
});

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.classList.remove('magictime', 'puffIn');
    modal.classList.add('magictime', 'magic');
  }
});