'use strict';

/* document.addEventListener('keyup', (event) => {
    if (event.code === 'Space') {
        const boxElm =document.querySelector('.box');
        boxElm.classList.toggle = ('on');
    }
}); */

/* const chage = () => {

const spinElm = document.querySelector('.spin');


spinElm.className = 'spin';

setTimeout(()=> {
    spinElm.className = 'second';
}, 4000);
}; */


const tabsActive1 = document.querySelector('.tabs_active1');
const tabsActive2 = document.querySelector('.tabs_active2');
const tabsActive3 = document.querySelector('.tabs_active3');

const article1Elm = document.querySelector('.article1');
article1Elm.classList.toggle = ('article1');

tabsActive1.addEventListener('click', article1Elm);

