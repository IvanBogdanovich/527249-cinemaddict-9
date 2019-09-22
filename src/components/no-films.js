import {createElement} from '../utils/utils';

export default class NoFilms {
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

  getTemplate() {
    return `
      <section class="films">
        <section class="films-list">
           <div class="no-result">
            no films
          </div>
        </section>
      </section>
    `.trim();
  }
}
