import {createElement} from '../utils/utils';

export default class FooterCounter {
  constructor(count) {
    this._element = null;
    this._count = count;
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

  getTemplate() {
    return `
    <section class="footer__statistics">
      <p>
        <span class="footer__counter">${this._count}</span>
        movies inside
      </p>
    </section>
    `.trim();
  }
}
