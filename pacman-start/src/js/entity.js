'use strict';

const TILE_SIZE = 85;
const ENTITY_WALL = 'wall';
const ENTITY_APPLE = 'apple';
const ENTITY_BOMB = 'bomb';

class Entity {
  constructor(xpos, ypos, type) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.type = type;
  }

  render() {
    const element = document.createElement('div');
    element.className = `entity entity--${this.type}`;
    element.style.left = `${this.xpos * TILE_SIZE}px`;
    element.style.top = `${this.ypos * TILE_SIZE}px`;
    return element;
  }

  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
  }

  unmount() {
    this.element.parentNode.removeChild(this.element);
    this.element = null
  }
}