'use strict';

// let btns = document.getElementsByClassName("btn");
window.addEventListener('load', function() {
  let containerEl = document.querySelectorAll(".container")[0];
  let y = 65;
  for (let i = 0; i < 81; i++) {
    let cellEl = document.createElement('div');
    cellEl.classList.add("cell");
    containerEl.insertAdjacentElement('beforeend', cellEl);
    if ((i % 2 == 0) && (i > 9)) {
      cellEl.style.backgroundColor = 'black';
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

    if (i == 0) {
      cellEl.classList.add("cell_head");
      cellEl.classList.remove("cell");
    }
  }
});