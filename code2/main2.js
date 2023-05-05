'use strict'

const list = document.getElementById('list');
// const inputs = document.querySelectorAll('input');gi

function selectFirstChild() {
  list.firstElementChild.style.color = 'blue';
}

function selectLastChild() {
  list.lastElementChild.style.color = 'orange';
}

function selectNextNode() {
  list.firstElementChild.style.color = 'red'; //'nextElementSibling ??????'
}

function selectPrevNode() {
  list.lastElementChild.style.color = 'violet'; //'previousElementSibling ??????'
}

function createNewChild() {
  const addElem = document.createElement('li');
  addElem.textContent = `List Item last`;
  addElem.style.color = 'blue';
  list.append(addElem);
}

function removeLastChild() {
  list.lastElementChild.remove();
}

function createNewChildAtStart() {
  const addElem2 = document.createElement('li');
  addElem2.textContent = `List Item start`;
  addElem2.style.color = 'green';
  list.prepend(addElem2);
}

// document.addEventListener('click', function(event) {
//   const click = event.target.input;
//   if (click === "selectFirstChild()") {
//     selectFirstChild.remove();
//   }
// });