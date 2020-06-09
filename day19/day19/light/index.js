'use strict';

const bulbElm = document.querySelector('.light');

bulbElm[0].addEventListener('click', () => {
    
    bulbElm[0].classList.add = 'off';
    bulbElm[1].classList.remove = 'off';
    bulbElm[2].classList.remove = 'off';


});

