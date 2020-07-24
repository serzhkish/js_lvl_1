'use strict';


// Стиль es5

function Product(name, price) {
  this.name = name;
  this.price = price;
}

/**
 * 
 * @param {*} disc - % скидки от 0 до 100 
 */
Product.prototype.make25PercentDiscount = function(disc) {
  this.price = this.price - (this.price / 100 * disc)
}

let prod = new Product("phone_es5", 200);
prod.make25PercentDiscount(25);
console.log(prod);





// Стиль es6

class Product2 {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  make25PercentDiscount(disc) {
    this.price = this.price - (this.price / 100 * disc)
  }
}

let prod2 = new Product2("phone_es6", 400);
prod2.make25PercentDiscount(25);
console.log(prod2);