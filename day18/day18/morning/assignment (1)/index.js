'use strict';


/* document.addEventListener('DOMContentLoaded', () => {
  console.log('It works');
}); */


const knobElm = document.querySelector('#knob');
const counterElm = document.querySelector('#counter');
const minusElm = document.querySelector('#minus');
const plusElm = document.querySelector('#plus');


let value = 4;

minusElm.addEventListener('click', () => {
  value -= 1;
  
  const counterElm = document.querySelector('#counter');
  counterElm.textContent = value;
  const knobElm = document.querySelector('#knob');
  knobElm.style.width = `${value * 10}%`;

    
});


/* let value = 4;

const btnPlus = document.querySelector('#plus');
btnPlus.addEventListener('click', () => {
  if (value < 10) {
    value +=1;
  }
  
  const counterElm = document.querySelector('#counter');
  counterElm.textContent = value;
  const knobElm = document.querySelector('#knob');
  knobElm.style.width = `${value * 10}%`
});


const btnMinus = document.querySelector('#minus');
btnMinus.addEventListener('click', () => {
  if (value > 0) {
    value -=1;
  }
  
  const counterElm = document.querySelector('#counter');
  counterElm.textContent = value;
  const knobElm = document.querySelector('#knob');
  knobElm.style.width = `${value * 10}%`
}); */

/* class ProgressBar {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  increase() {
    if (this.value < this.max) {
      this.value += 1;
    }
  }

  decrease() {
    if (this.value < 0) {
      this.value -= 1;
    }
  }
};

const bar = new ProgressBar(15, 50);




const update = (ProgressBar) =>{const counterElm = document.querySelector('#counter');
counterElm.textContent = ProgressBar.value;
const maximumElm = document.querySelector('#maximum');
maximumElm.textContent =ProgressBar.max;
const step = 100 / ProgressBar.max;
const knobElm = document.querySelector('#knob');
knobElm.style.width = `${ProgressBar.value * 10}%`
};


const btnPlus = document.querySelector('#plus');
btnPlus.addEventListener('click', () => {
  if (this.value < max) {
    this.value +=1;
  }
  bar.increase();
  update(bar);
});


const btnMinus = document.querySelector('#minus');
btnMinus.addEventListener('click', () => {
  if (this.value > 0) {
    this.value -=1;
  }
  bar.decrease();
  update(bar);
});
update(bar); */


/* class ProgressBar {
  constructor(value, max, color) {
    this.value = value;
    this.max = max;
    this.color = color;
  }

  render() {
    const barElement = document.createElement('div');
    barElement.className = 'progress-bar';
    barElement.innerHTML = `
    <div id="label" class="label">
    <span id="counter">${this.value}</span>/<span id="maximum">${this.max}</span>
  </div>
  <div class="progress">
    <div id="minus" class="btn-minus"></div>
    <div class="bar">
      <div id="knob" class="knob"></div>
    </div>
    <div id="plus" class="btn-plus"></div>
  </div>
  `;

  
const btnPlus = barElement.querySelector('#plus');
btnPlus.addEventListener('click', () => {
  this.increase();
});


const btnMinus = barElement.querySelector('#minus');
btnMinus.addEventListener('click', () => {
  this.decrease();
});

  return barElement
  }

  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
    this.update();
  }

  update = () =>{
    const counterElm = this.element.querySelector('#counter');
    counterElm.textContent = this.value;
    const maximumElm = this.element.querySelector('#maximum');
    maximumElm.textContent =this.max;

    const step = 100 / this.max;
    const knobElm = this.element.querySelector('#knob');
    knobElm.style.width = `${this.value * step}%`;
    knobElm.style.backgroundColor = this.color;
}

  increase() {
    if (this.value < this.max) {
      this.value += 1;
    }

    this.update();
  }

  decrease() {
    if (this.value > 0) {
      this.value -= 1;
    }
    this.update();
  }
};

const app = document.querySelector('#app');

const bar1 = new ProgressBar(15, 50, 'red');
bar1.mount(app);

const bar2 = new ProgressBar(2, 20, 'green');
bar2.mount(app);

const bar3 = new ProgressBar(8, 10, 'blue');
bar3.mount(app); */





