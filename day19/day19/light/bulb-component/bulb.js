'use strict';

class Bulb {
  constructor(isOn) {
    this.isOn = isOn;
  }

  render() {
    const bulbElement = document.createElement('div');
    bulbElement.className = 'bulb';
    bulbElement.addEventListener('click', () => {
      this.isOn = !this.isOn;
      this.update();
    });
    return bulbElement;
  }

  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
    this.update();
  }

  update() {
    if (this.isOn) {
      this.element.className = 'bulb bulb--on';
    } else {
      this.element.className = 'bulb bulb--off';
    }
  }
};
