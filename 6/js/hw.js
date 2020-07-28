'use strict';

window.addEventListener('load', function() {
  let containerEl = document.querySelectorAll(".container")[0];
  let y = 65;
  for (let i = 0; i < 81; i++) {
    let cellEl = document.createElement('div');
    cellEl.classList.add("cell");
    containerEl.insertAdjacentElement('beforeend', cellEl);
    if ((i % 2 == 0) && (i > 9)) {
      cellEl.style.backgroundColor = 'black';
    } else {
      cellEl.style.backgroundColor = 'white';
    }

    // Нумерация столбцов (цифры)
    if ((i > 0) && (i < 9)) {
      cellEl.innerHTML = i;
      cellEl.classList.add("cell_head");
      cellEl.classList.remove("cell");
    }

    // Нумерация строк (буквы)
    if ((i % 9 == 0) && ((i != 0))) {
      cellEl.innerHTML = String.fromCharCode(y);
      y++;
      cellEl.classList.add("cell_head");
      cellEl.classList.remove("cell");
      cellEl.style.backgroundColor = 'white';
    }

    // Расстановка черных шахмат
    if ((i == 10) || (i == 17)) {
      let figureEl = document.createElement('div');
      figureEl.classList.add("figure_black");
      figureEl.innerHTML = "&#9820";
      cellEl.insertAdjacentElement('beforeend', figureEl);
    }
    if ((i == 11) || ((i == 16))) {
      let figureEl = document.createElement('div');
      figureEl.classList.add("figure_black");
      figureEl.innerHTML = "&#9822";
      cellEl.insertAdjacentElement('beforeend', figureEl);
    }
    if ((i == 12) || (i == 15)) {
      let figureEl = document.createElement('div');
      figureEl.classList.add("figure_black");
      figureEl.innerHTML = "&#9821";
      cellEl.insertAdjacentElement('beforeend', figureEl);
    }
    if (i == 13) {
      let figureEl = document.createElement('div');
      figureEl.classList.add("figure_black");
      figureEl.innerHTML = "&#9818";
      cellEl.insertAdjacentElement('beforeend', figureEl);
    }
    if (i == 14) {
      let figureEl = document.createElement('div');
      figureEl.classList.add("figure_black");
      figureEl.innerHTML = "&#9819";
      cellEl.insertAdjacentElement('beforeend', figureEl);
    }
    if ((i > 18) && (i < 27)) {
      let figureEl = document.createElement('div');
      figureEl.classList.add("figure_black");
      figureEl.innerHTML = "&#9823";
      cellEl.insertAdjacentElement('beforeend', figureEl);
    }

    // Расстановка белых шахмат
    if ((i == 73) || (i == 80)) {
      let figureEl = document.createElement('div');
      figureEl.classList.add("figure_white");
      figureEl.innerHTML = "&#9814";
      cellEl.insertAdjacentElement('beforeend', figureEl);
    }
    if ((i == 74) || ((i == 79))) {
      let figureEl = document.createElement('div');
      figureEl.classList.add("figure_white");
      figureEl.innerHTML = "&#9816";
      cellEl.insertAdjacentElement('beforeend', figureEl);
    }
    if ((i == 75) || (i == 78)) {
      let figureEl = document.createElement('div');
      figureEl.classList.add("figure_white");
      figureEl.innerHTML = "&#9815";
      cellEl.insertAdjacentElement('beforeend', figureEl);
    }
    if (i == 76) {
      let figureEl = document.createElement('div');
      figureEl.classList.add("figure_white");
      figureEl.innerHTML = "&#9812";
      cellEl.insertAdjacentElement('beforeend', figureEl);
    }
    if (i == 77) {
      let figureEl = document.createElement('div');
      figureEl.classList.add("figure_white");
      figureEl.innerHTML = "&#9813";
      cellEl.insertAdjacentElement('beforeend', figureEl);
    }
    if ((i > 63) && (i < 72)) {
      let figureEl = document.createElement('div');
      figureEl.classList.add("figure_white");
      figureEl.innerHTML = "&#9817";
      cellEl.insertAdjacentElement('beforeend', figureEl);
    }

    // Левый верхний угол
    if (i == 0) {
      cellEl.classList.add("cell_head");
      cellEl.classList.remove("cell");
    }
  }
});