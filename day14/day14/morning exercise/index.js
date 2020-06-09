'use strict';
  

let result = 0;


const add = () =>{
    const inputElm = document.querySelector('#input');
    const resultElm = document.querySelector('.result');

    result += Number(inputElm.value);
   
    inputElm.value = '0';
    inputElm.focus();
    resultElm.textContent = result;


    
}




