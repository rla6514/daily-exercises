'use strict';

/* document.addEventListener('DOMContentLoaded', () => {
  console.log('It works');
}); */


const minusElm = document.querySelector('#minus');
const plusElm = document.querySelector('#plus');


let value = 4;

plusElm.addEventListener('click', () => {
    if (value <10) {
        value += 1;
    }  
    const counterElm = document.querySelector('#counter');
    counterElm.textContent = value;
    const knobElm = document.querySelector('#knob');
    knobElm.style.width = `${value * 10}%`;  
      
  });

minusElm.addEventListener('click', () => {
    if (value > 0) {
        value -= 1;
    }
  
    const counterElm = document.querySelector('#counter');
    counterElm.textContent = value;
    const knobElm = document.querySelector('#knob');
    knobElm.style.width = `${value * 10}%`;

});
