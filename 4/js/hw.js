'use strict';

// let btns = document.getElementsByClassName("btn");
let btns = document.querySelectorAll(".btn");

btns.forEach(element => {
  element.addEventListener('click', function(event) {
    let desc = document.createElement('div');
    let btn_cancel = document.createElement('button');
    desc.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, sed molestias? Placeat illo sit qui architecto ratione quaerat sunt, quos, aliquam ab eveniet voluptatibus repellendus consequuntur fugit?";
    desc.classList.add("desc");
    btn_cancel.innerHTML = "Отмена";
    btn_cancel.classList.add("btn_cancel");

    element.parentElement.querySelectorAll(".image")[0].style.display = "none";
    element.style.display = "none";
    
    element.parentElement.querySelectorAll(".title")[0].insertAdjacentElement('afterend', desc);
    element.parentElement.querySelectorAll(".desc")[0].insertAdjacentElement('afterend', btn_cancel);
    element.parentElement.querySelectorAll(".btn_cancel")[0].addEventListener('click', function(event) {
      element.parentElement.querySelectorAll(".image")[0].style.display = "block";
      element.style.display = "block";
      element.parentElement.querySelectorAll(".desc")[0].remove();
      element.parentElement.querySelectorAll(".btn_cancel")[0].remove();
    });
  });
});