'use stirct';
/*  
const greet = (name) => {
    return 'Hello ' + name;
  };

  const apply = (fn, x) => {
      return fn(x);  
}

console.log(
    apply(greet, 'Sue')
);
*/

/*  
const func = (x) => x*x;

const bar = (fn) => {
    return fn(6);  
};
*/

/*  console.log(bar(func));*/

/*  
console.log(bar((bedonkadonk) => bedonkadonk/2));


const func = (x) => x*x;
*/

/*  
const bar = (fn, s) => {
    return fn(s) + fn(s * 2);  
};

console.log(bar((squiggly) => squiggly + 3, 5));
*/


/*  
const paycheck = () =>{
    const payValue = document.querySelector('#pay');
    const hoursValue = document.querySelector('#hours');
    const daysValue = document.querySelector('#days');

    const elementPay = payValue.value;
    const elementHours = hoursValue.value;
    const elementDays = daysValue.value;



    const salary = elementPay * elementHours * elementDays;

    const message = document.querySelector('#result');
    message.textContent = 'Your salary is ' + salary;

};

*/

/*  
const greet = () =>{
    console.log('bedonkadonk');
};


setTimeout(greet, 5000);
*/


/*  
let count = 0;

const timerId = setInterval(()=> {
    count += 1;
    console.log(count + ' : bedonkadonk');
}, 2000);

const stop = () => {
    clearInterval(timerId);
}
*/


/*  
const handleClick = ()=>{
    console.log('squigglywiggly');
}
*/

/*  
const btnElm = document.querySelector(' #btn');
btnElm.addEventListener('click', ()=>{
    console.log('squigglywiggly');});
*/


/*  
window.addEventListener('resize', ()=> console.log('resize'));
*/

/*  
document.addEventListener('keydown', ()=> console.log('down'));

const btnElm = document.querySelector(' #btn');
btnElm.addEventListener('click', ()=>{
    console.log('squigglywiggly');});
*/


/*  
const switchOn = () => {
    const stopElm = document.querySelector('.stop');
    const stopWalkElm = document.querySelector('.stop_walk');
    stopElm.classList.toggle('on');
    stopWalkElm.classList.toggle('walk');
}

const switchElm = document.querySelector(' #switch');
switchElm.addEventListener('click',()=>{
    const crosswalkLight =
    setTimeout(switchOn, 5000);
});
*/



const finishElm = document.querySelector('#finish');

let timeLeft = 60;
const timerElm = document.querySelector('.timer');

const countdown = () =>{
    if (timeLeft == -1) {
        finishElm.textContent = 'Time is up';

    } else {
        timerElm.innerHTML = timeLeft + 'seconds remaining';
        timeLeft--;
    }

}
const timerId = setInterval(countdown, 1000);





