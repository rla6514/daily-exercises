'use strict';

const changeColor = () => { 
let redElm = document.querySelector('#red').value;
let greenElm = document.querySelector('#green').value;
let blueElm = document.querySelector('#blue').value;

let rgbColor;

if(redElm > 255 || greenElm > 255 || blueElm > 255) {
    alert('Number cannot be higher than 255!');
} else if (redElm < 0 || greenElm < 0 || blueElm < 0) {alert('Number cannot be lower than 0!');
} else {
    rgbColor = 'rgb(' + redElm + ', ' + greenElm + ', ' + blueElm; + ')';
}

document.querySelector('#color').style.background = rgbColor;
document.querySelector('#current').innerHTML = rgbColor;
}

