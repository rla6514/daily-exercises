'use strict';

/* const users = ['sam', 'joe', 'alex', 'taylor', 'michal'];
const logged = [true, false, false];

const numbers = [[1, 3, 5], [4, 2, 6], [8, 7, 9]];

const tictactoe = [
    [' ', 'x', 'o'],
    [' ', 'o', 'x'],
    [' ', ' ', ' '],

]; */


/* const nums = [9, 5, 3, 1, 12, 7, 8, 4, 6];


/* for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] % 2 === 0) {
        console.log(nums[i])
    }
} */ 

/* const nums = [9, 5, 3, 1, 12, 7, 8, 4, 6];

let s = 0;
for (let i = 0; i < nums.length; i += 1) {
    s += nums[i];
    
}
console.log(s); */

/* const nums = [9, 5, 3, 1, 12, 7, 8, 4, 6];

let m = nums[0];
for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] > m) {
        m = nums[i];
    }
    
}
console.log(m); */

/* const hours = [8, 8, 4, 5, 7, 8, 2];

//console.log(hours[6]);
const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'firday'];

console.log(days[0]); */

const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17]

/* for (let i = 0; i < numbers.length; i += 1) {
    numbers[i] = (numbers[i] * numbers[i])
    console.log(numbers[i]);
} */

/* for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < 0) {
    console.log(numbers[i])
    }
} */

/* for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < 0) {
    console.log(-numbers[i]);
    } else {
        console.log(numbers[i]);
    }
} */

/* for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i]%2 === 0) {
    console.log(numbers[i]);
    } 
} */


/* for (let i = 0; i < numbers.length; i += 1) {
    let s = numbers[i] - 5
    console.log(s);
    
} */

/* for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > numbers[i - 1]) {
        console.log(numbers[i]);
    }
    
} */

/* for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < numbers[i - 1] && numbers[i] < numbers[i + 1]) {
        console.log(numbers[i]);
    }
    
} */


/* let diff = 0;
let sum = 0;
let square = 0;
let average = 0;
let averageSquare = 0;
for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
    average = sum / (numbers.length);
    square += numbers[i] ** 2;
    averageSquare = square / (numbers.length);
    diff = square - averageSquare;
     

}

console.log(averageSquare); */


/* for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < 16 && numbers[i] >= 14) {
        console.log(numbers[i]);
    }

} */

/* 
const random = Number(Math.max(numbers));
console.log(random);
for (let i = 0; i < numbers.length; i += 1) {
   // console.log(numbers.reverse());
 
}

const numbersReverse = [17, -2, -15, 8, 13, -10, -14, 32, 19, -31, 12, 24, -10, 14, -17, 28, -24, 8, 18];
 */



/* const nums = [9, 5, 3, 1, 12, 7, 8, 4, 6];


let sum = 0;
nums.forEach((x, index) => {
    if (index === 7) {
        console.log(x);
    }
});
 */



/*  const expenses = [
     {
     name: 'Peter',
     item: 'toilet paper',
     amount: 70
    },

     {
     name: 'Jade',
     item: 'flour',
     amount: 25
    },

     {
     name: 'Anna',
     item: 'soap',
     amount: 80
    },

     {
     name: 'Vir', 
     item: 'beers',
     amount: 70
    }
    ]; */
    
/*     const expense = {
    name: 'Petr',
    item: 'toilet paper',
    amount: 70,
}; */



/* const course = {
    title: 'Javascript for dummies',
    duration: 80,
    price: 2000,
    discPrice: 12,
    lessons: [
        {
            tiopic: 'Introduction', 
            teaser: 'Awesone JS basics',
        },
        {
            tiopic: 'value and variables', 
            teaser: 'Warking with drawers',
        },
    ]
}; */

/* const list = [
    'apples',
    'oranges',
    'milk',
    'flour',
    'tomatos',
];

const listElm = document.querySelector('.shopping-list');
list.forEach((item) => {
    listElm.innerHTML += ('<li>' + item + '</li>');
}); */


/* const library = {
    title: '',
    authors: '',
    numberOfPages: '',
    publishYear: '',
    rent: '',
    conditon: '',
} */


const departures = [494, 499, 500, 517, 520, 523, 530, 556, 563, 576, 586, 613, 625];


/* 
for (let i = 0; i < departures.length; i ++) {
    console.log(departures[i]);
    let time = Math.round(departures[i] / 60);
let min = departures[i] % 60;

    
    const schedule = document.querySelector('.time');
    schedule.textContent = time + ':' + min + '.';
    
}
 */
const schedule = document.querySelector('.time');
departures.forEach((timeTable) => {
    schedule.innerHTML += ('<li>' + timeTable + '</li>' );
});


