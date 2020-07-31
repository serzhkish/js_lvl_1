'use strict';

let menubtnEl = document.querySelector('.menu-btn');
let menucontentEl = document.querySelector('.menu-content');
let productbtnEl = document.querySelectorAll('.product-btn');
let tableEl = document.createElement('table');

window.addEventListener('load', function() {
  let colNameArr = ['ID', 'Имя', 'Цена', 'Количество'];
  let firstRow = document.createElement('tr');
  menucontentEl.insertAdjacentElement('afterbegin', tableEl)
  tableEl.insertAdjacentElement('afterbegin', firstRow)
  for (let row = 0; row < 4; row++) {
    let colNameEl = document.createElement('td');
    colNameEl.innerText = colNameArr[row];
    firstRow.insertAdjacentElement('beforeend', colNameEl)
  }
});

menubtnEl.addEventListener('click', function(event) {
  if (menucontentEl.style.display == 'block') {
    menucontentEl.style.display = null;
  } else {
    menucontentEl.style.display = 'block';
  }
});

productbtnEl.forEach(function(element) {
  element.addEventListener('click', function(event) {
    // Есть ли продукт в корзине
    let tableRowId = document.querySelectorAll('.td-id');
    let isProductInBasket = false;
    tableRowId.forEach(function(item) {
      if (item.innerText.trim() == element.dataset.id) {
        item.parentElement.querySelector('.td-count').innerText = (+item.parentElement.querySelector('.td-count').innerText) + 1;
        isProductInBasket = true;
      }
    });
    if (!isProductInBasket) {
      // Продукта в корзине нет, добавляем новую строку
      let nextRow = document.createElement('tr');
      tableEl.insertAdjacentElement('beforeend', nextRow)
      // id cell
      let nextColEl = document.createElement('td');
      nextColEl.innerText = element.dataset.id;
      nextColEl.classList.add('td-id');
      nextRow.insertAdjacentElement('beforeend', nextColEl)
      // Имя cell
      nextColEl = document.createElement('td');
      nextColEl.innerText = element.parentElement.querySelector('.product-title').innerText.trim();
      nextRow.insertAdjacentElement('beforeend', nextColEl)
      // Цена cell
      nextColEl = document.createElement('td');
      let productPriceEl = element.parentElement.querySelector('.product-price').innerText.trim();
      nextColEl.innerText = productPriceEl.substring(0, productPriceEl.length - 2);
      nextColEl.classList.add('td-price');
      nextRow.insertAdjacentElement('beforeend', nextColEl)
      // Количество cell
      nextColEl = document.createElement('td');
      let nextColIEl = document.createElement('i');
      nextColIEl.classList.add('fa');
      nextColIEl.classList.add('fa-trash');
      nextColIEl.setAttribute('aria-hidden', 'true');
      nextColIEl.style.cursor = 'pointer';
      nextColEl.innerText = '1';
      nextColEl.classList.add('td-count');
      nextColEl.classList.add('td-count');
      nextRow.insertAdjacentElement('beforeend', nextColEl);
      nextRow.insertAdjacentElement('beforeend', nextColIEl);
      nextColIEl.addEventListener('click', function(event){
        event.target.parentElement.remove();
        // Перерасчет итоговой стоимости
        let menuContentTotalEl = document.querySelector('.menu-content-total');
        let totalPrice = 0;
        let tableRowPrice = document.querySelectorAll('.td-price');
        tableRowPrice.forEach(function(item){
          let countProduct = +item.parentElement.querySelector('.td-count').innerText.trim();
          totalPrice += +item.innerText.trim() * countProduct;
        });
        menuContentTotalEl.innerText = totalPrice + " \u20bd";
      });
    }
    // Перерасчет итоговой стоимости
    let menuContentTotalEl = document.querySelector('.menu-content-total');
    let totalPrice = 0;
    let tableRowPrice = document.querySelectorAll('.td-price');
    tableRowPrice.forEach(function(item){
      let countProduct = +item.parentElement.querySelector('.td-count').innerText.trim();
      totalPrice += +item.innerText.trim() * countProduct;
    });
    menuContentTotalEl.innerText = totalPrice + " \u20bd";
  })
})