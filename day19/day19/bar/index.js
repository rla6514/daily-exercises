'use strict';

class ProgressBar {
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

    const minusPlus = barElement.querySelector('#minus');
    minusPlus.addEventListener('click', () => {
      this.decrease();
    });



    return barElement;
  }

  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
    this.update();
  }

  update = () => {
    const counterElm = this.element.querySelector('#counter');
    counterElm.textContent = this.value;
    const maximumElm = this.element.querySelector('#maximum');
    maximumElm.textContent = this.max;

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

const bar1 = new ProgressBar(2, 17, 'red');
bar1.mount(app);


const bar2 = new ProgressBar(0, 17, 'green');
bar2.mount(app);

const bar3 = new ProgressBar(0, 17, 'blue');
bar3.mount(app);


const btnElm = document.querySelector('#btn');
btnElm.addEventListener('click', () => {
  const color = `rgb(${bar1.value * 15},${bar2.value * 15},${bar3.value * 15})`;
  btnElm.style.backgroundColor = color;
})