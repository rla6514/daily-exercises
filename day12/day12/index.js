'use strict';

/*
const auditorium = Number(prompt('Please enter your seat number:'));
const row = Math.floor(auditorium / 10);
const column = Math.round(auditorium % 10);
const letter = String.fromCharCode(65 + row) + column;
document.write(letter);
*/

/*
const seatNumber = Number(prompt('Enter seat number:'));
const colNumber = seatNumber % 10;
const rowNumber = Math.floor(seatNumber / 10);
const seatId = String.fromCharCode(65 + rowNumber) + colNumber;
document.write(seatId);
*/

/*
const age = Number(prompt('Give your age: '));

if(age >= 18) {
    document.write('welcome');
} else{
    const remains = 18 - age;
     if (remains <= 3){
        document.write('Almost there ');
    } else if (remains <= 6){
        document.write('Wait for a while');
    } else {
        document.write('Run to your mama');
    }
}
*/

/*
const sum1 = Number(prompt('Please type your first angle for your triangle: '));
const sum2 = Number(prompt('Please type your second angle for your triangle: '));
const sum3 = Number(prompt('Please type your third angle for your triangle: '));
const sum = (sum1 + sum2 + sum3);
if(sum === 180){
    document.write('You have a perfect triangle');}
    else {
        document.write('Please go through and try again');
    }
*/

/*
const month = Number(prompt('Please type a month number (1 for January, 2 for February, etc. '));
if (month === 1, 3, 5, 7, 8 ,10, 12){
    document.write('Number of days in this month is 31days. ');}
    else if (month === 4, 6, 9, 11){
        document.write('Number of days in this month is 30days. ')
    }
*/

/*
let fare = 12;
const age = Number(prompt('please type your age: '));
if (age < 6) {
    document.write('The bus fare is 0 euro. ');
} else if (age <= 15){
    document.write('The bus fare is' + ' ' + + Math.round(fare * 0.35) +  'euros. ');
} else if (age <= 26){
    document.write('The bus fare is' + ' ' + + Math.round(fare * 0.65) +  'euros. ');
} else if (age <= 64){
    document.write('The bus fare is' + ' ' + + Math.round(fare * 1) +  'euros. ');
} else if (age > 64){
    document.write('The bus fare is' + ' ' + + Math.round(fare * 0.5) +  'euros. ');
}
*/

/*
const morning = Number(prompt('Please type your 8 a.m: '));
const afternoon = Number(prompt('Please type your 4 p.m. temperature: '));
const midnight = Number(prompt('Please type your midnight temperature: '));
document.write('The highest temperature for today is ' + ' ' + Math.max(morning,afternoon,midnight));
*/

/*
const swimmer1 = prompt('Please enter your name:');
const swimmer2= prompt('Please enter your name:');
const swimmer3 = prompt('Please enter your name:');
let time = Math.round(Math.random()*100);
const lap = (45<=time && time<=60); 
document.write(lap);
*/

/*
const age =15;
const name = 'robert';
const stormy = true;
const area = (width, height) => width * height;
const roll = () => Math.floor(Math.random() * 6) + 1;

const abs = (number) => {
    if (number >= 0) {
        return number;
    
        return -number;
    }
};
*/

/*
const square = (number) => {
    return number*number;
};

const hypotenuse = (numbera,numberb) => {
    return Math.sqrt(square(numbera) + square(numberb));
};

const emailFromLogin = (firstPart) => {
    firstPart + `@codeboot.com`;
};

const name1 = prompt('type your firstname:');
const name2 = prompt('type your lastname:');
let first = name1.substr(0,5);
let second = name2.substr(0,3);
let combine = first + second;
const loginFromName = (combine) => {
    return (combine + `@codeboot.com`) ;
};

document.write(combine);
*/

