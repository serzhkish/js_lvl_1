'use strict';


// Стиль es5

function Post(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
}

Post.prototype.edit = function (text) {
  this.text = text;
}

function AttachedPost(author, text, date) {
  Post.call(this, author, text, date);
  this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
  this.highlighted = true;
}

const p1 = new Post('serzh', 'more and more and more ...', new Date());
console.log(p1);
p1.edit('less and less and less ...');
console.log(p1);

const a1 = new AttachedPost('admin', 'more and more and more ...', new Date());
console.log(a1);
a1.makeTextHighlighted();
a1.edit('less and less and less ...');
console.log(a1);



// Стиль es6

class Post1 {
  constructor(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  }

  edit(text) {
    this.text = text;
  }
}

class AttachedPost1 extends Post1 {
  constructor(author, text, date) {
    super(author, text, date);
    this.highlighted = false;
  }
  
  makeTextHighlighted() {
    this.highlighted = true;
  }
}

const p2 = new Post1('serzh_es6', 'es6 style', new Date());
console.log(p2);
p2.edit('es6 style edit');
console.log(p2);

const a2 = new AttachedPost1('admin', 'es6 style AttachedPost1', new Date());
console.log(a2);
a2.makeTextHighlighted();
a2.edit('es6 style AttachedPost1 edit');
console.log(a2);