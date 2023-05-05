'use strict'

// 1. Створіть 2 інпути та одну кнопку. Зробіть так, щоб інпути обмінювалися вмістом:

const main = document.createElement('main');
document.body.prepend(main);

for (let i = 0; i < 5; i++) {
  const container0 = document.createElement('div');
  container0.classList.add(`container${i}`);
  main.append(container0);
}

const container0 = document.querySelector('.container0');

const input1 = document.createElement('input');
input1.setAttribute('id', 'input1');
container0.prepend(input1);
const input2 = document.createElement('input');
input2.setAttribute('id', 'input2');
input1.after(input2);
const btn1 = document.createElement('input');
btn1.setAttribute('type', 'button');
btn1.setAttribute('value', 'Обмін');
input2.after(btn1);
btn1.onclick = btn1__click;

function btn1__click () {
  const input1Value = input1.value;
  const input2Value = input2.value;
  input1.value = input2Value;
	input2.value = input1Value;
}


// 2. Створіть 5 див на сторінці потім використовуючи getElementsByTagName і
// forEath поміняйте дивам колір тіла:

const container1 = document.querySelector('.container1');

function div () {
  for (let i = 0; i < 5; i++) {
    const divs = document.createElement('div');
    divs.textContent = 'Change color';
    container1.prepend(divs);
  }
}
div();

  const [...blueDivs] = container1.getElementsByTagName('div');
  blueDivs.forEach(elemArr => {
    elemArr.style.color = 'blue';
  })


// 3. Створіть багаторядкове поле для введення тексту та кнопки. Після натискання
// кнопки користувачем програма повинна згенерувати тег div з текстом, який був у 
// багаторядковому полі. Багаторядкове поле слід очистити після переміщення інформації:


const container2 = document.querySelector('.container2');

const copy = document.createElement('textarea');
copy.setAttribute('rows', '10');
copy.setAttribute('id', 'copy');
container2.prepend(copy);
const btn2 = document.createElement('input');
btn2.setAttribute('type', 'button');
btn2.setAttribute('value', 'Скопіювати');
copy.after(btn2);
btn2.onclick = btn2__click;

function btn2__click () {
  const newDivs = document.createElement('div');
  newDivs.textContent += copy.value;
  btn2.after(newDivs);
  copy.value = '';
}


// 4. Створіть картинку та кнопку з назвою "Змінити картинку" зробіть так, щоб при
// завантаженні сторінки була картинка https://itproger.com/img/courses/1476977240.jpg
// При натисканні на кнопку вперше картинка замінилася на https://itproger.com/img/courses/1476977488.jpg
// при другому натисканні щоб картинка замінилася на https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png

const container3 = document.querySelector('.container3');

const img = document.createElement('img');
img.setAttribute('src', 'https://itproger.com/img/courses/1476977240.jpg');
img.setAttribute('alt', 'image');
container3.prepend(img);
const btn3 = document.createElement('button');
btn3.textContent = 'Змінити картинку';
img.after(btn3);

btn3.onclick = function() {
  if (img.src === 'https://itproger.com/img/courses/1476977240.jpg') {
    img.src = 'https://itproger.com/img/courses/1476977488.jpg';
  } else {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png';
  }
}

// Створіть на сторінці 10 парахрафів і зробіть так, щоб при натисканні на параграф він зникав:

const container4 = document.querySelector('.container4');

function paragraphs () {
  for (let i = 0; i < 10; i++) {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'I am paragraph';
    paragraph.setAttribute('onclick', 'paragraph__click()');
    container4.prepend(paragraph);
  }
}
paragraphs();

function paragraph__click () {
  const p = document.querySelector('p');
  p.remove();
}