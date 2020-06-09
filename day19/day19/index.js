'use strict';


/* const month =11;
const day =11;

fetch (`http:/api.abalin.net/namedays?country=cz&month=${month}&day=${day}`)
.then((resp) => resp.json())
.then((json) => { 
    const title = document.querySelector('h1');
    title.textContent = `On ${day}.${month} ${json.data.namedays.cz}'s nameday`;
console.log(json.data.namedays.cz);
}); */

/* fetch (`http://bootcamp.podlomar.org/api/departures`)
    .then((resp) => resp.json())
    .then((json) => {
        const title = document.querySelector('h1');
        title.textContent = `${json.data}`;
        console.log(json);
    }); */


 /*    let phoneNumber = '0987654321';
let mobileNumber = '0123456789';


const phoneNumberOne = '0987654321';
const phoneNumberTwo = '0123456789';


const phoneNumber = '0987654321';
phoneNumber = '0123456789';
console.log(phoneNumber);

let mobileNumber = '0987654321';
mobileNumber = '0123456789';



const phoneNumber = '0987654321';
let mobileNumber = '0123456789'; */


class Train {
    constructor(name) {
        this.name = name;
        this.location = null;
        this.passengers = [];
    }
 
    load(passenger) {
        console.log(passenger, 'comes aboard');
        this.passengers.push(passenger);
    }
 
    unloadFirst() {
        let passenger = this.passengers.shift();
        console.log(passenger, 'exits the train');
    }
 
    unloadLast() {
        let passenger = this.passengers.pop();
        console.log(passenger, 'exits the train');
    }
 
    goTo(location) {
        console.log(this.name, 'arrives to', location);
        this.location = location;
    }
}
let train = new Train('Orient Express');
train.goTo('Istanbul').load('Hercule Poirot').load('Mr. Ratchett').goTo('London').unloadFirst();
