'use strict';



/* const ratingStarOnElm = document.querySelector('.rating__star--on');
const ratingStarOffElm = document.querySelector('.rating__star'); */

/* let value = 3;

const ratingStarsAddElm = document.querySelectorAll('.rating__star');

for (let i = 0; i < ratingStarsAddElm.length; i +=1) {
    ratingStarsAddElm.addEventListener('click', () => 
    
    ratingStarsAddElm.classList.add('rating__star--on')


    
   
)

for (let i = 0; i < ratingStarsRemoveElm.length; i +=1) 
    ratingStarsAddElm.addEventListener('click', () => 
    
    ratingStarsAddElm.classList.remove('rating__star--on')

) */

let value = 3;
const starElms = document.querySelectorAll('.rating__star');
console.log(starElms);
starElms[0].addEventListener('click', () => {
    const valueElm = document.querySelector('.rating__value');
    valueElm.textContent = 1;

    starElms[0].classList.add('rating__star--on');
    starElms[1].classList.remove('rating__star--on');
    starElms[2].classList.remove('rating__star--on');
    starElms[3].classList.remove('rating__star--on');
    starElms[4].classList.remove('rating__star--on');
    
});

starElms[1].addEventListener('click', () => {
    const valueElm = document.querySelector('.rating__value');
    valueElm.textContent = 2;

    starElms[0].classList.add('rating__star--on');
    starElms[1].classList.add('rating__star--on');
    starElms[2].classList.remove('rating__star--on');
    starElms[3].classList.remove('rating__star--on');
    starElms[4].classList.remove('rating__star--on');
});

starElms[2].addEventListener('click', () => {
    const valueElm = document.querySelector('.rating__value');
    valueElm.textContent = 3;

    starElms[0].classList.add('rating__star--on');
    starElms[1].classList.add('rating__star--on');
    starElms[2].classList.add('rating__star--on');
    starElms[3].classList.remove('rating__star--on');
    starElms[4].classList.remove('rating__star--on');
});

starElms[3].addEventListener('click', () => {
    const valueElm = document.querySelector('.rating__value');
    valueElm.textContent = 4;

    starElms[0].classList.add('rating__star--on');
    starElms[1].classList.add('rating__star--on');
    starElms[2].classList.add('rating__star--on');
    starElms[3].classList.add('rating__star--on');
    starElms[4].classList.remove('rating__star--on');
});

starElms[4].addEventListener('click', () => {
    const valueElm = document.querySelector('.rating__value');
    valueElm.textContent = 5;

    starElms[0].classList.add('rating__star--on');
    starElms[1].classList.add('rating__star--on');
    starElms[2].classList.add('rating__star--on');
    starElms[3].classList.add('rating__star--on');
    starElms[4].classList.add('rating__star--on');
});


/* let value = 3;
const starElms = document.querySelectorAll('.rating__star');

const turnOnStars = (count) => {
    for (let i = 0; i < starElms.length; i++){
        if (i < count) {
            starElms[i].classList.add('rating__star--on');
        } else {
            starElms[i].classList.remove('rating__star--on');
        }
    }
    
};

starElms[0].addEventListener('click', () => {
    const valueElm = document.querySelector('.rating__value');
    valueElm.textContent = 1;
    turnOnStars(1);


});

starElms[1].addEventListener('click', () => {
    const valueElm = document.querySelector('.rating__value');
    valueElm.textContent = 2;
    turnOnStars(2);
});

starElms[2].addEventListener('click', () => {
    const valueElm = document.querySelector('.rating__value');
    valueElm.textContent = 3;

    turnOnStars(3);
});

starElms[3].addEventListener('click', () => {
    const valueElm = document.querySelector('.rating__value');
    valueElm.textContent = 4;

    turnOnStars(4);
});

starElms[4].addEventListener('click', () => {
    const valueElm = document.querySelector('.rating__value');
    valueElm.textContent = 5;

    turnOnStars(5);
}); */


/* const starElms = document.querySelectorAll('.rating__star');

const turnOnStars = (count) => {
    for (let i = 0; i < starElms.length; i++){
        if (i < count) {
            starElms[i].classList.add('rating__star--on');
        } else {
            starElms[i].classList.remove('rating__star--on');
        }
    }
    
};

starElms.forEach((star, index) => {
    star.addEventListener('click', () => {
        const valueElm = document.querySelector('.rating__value');
        valueElm.textContent = index + 1;
        turnOnStars(index + 1);
    });
});
 */