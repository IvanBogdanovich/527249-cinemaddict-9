import {createElement} from '../utils/utils';

export default class ShowMoreButton {
  constructor() {
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  static getTemplate() {
    return `
      <button class="films-list__show-more">Show more</button>
    `.trim();
  }
}
