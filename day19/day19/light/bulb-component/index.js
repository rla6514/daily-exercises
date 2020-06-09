'use strict';

const app = document.querySelector('#app');

const bulb1 = new Bulb(true);
bulb1.mount(app);

const bulb2 = new Bulb(false);
bulb2.mount(app);

const bulb3 = new Bulb(false);
bulb3.mount(app);