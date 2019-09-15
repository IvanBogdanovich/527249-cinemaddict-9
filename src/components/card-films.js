import ShowMoreButton from './show-more';
import {createElement} from '../utils/utils';

export default class CardFilms {
  constructor(films) {
    this._element = null;
    this._films = films;
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
          <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

          <div class="films-list__container"></div>

           ${ShowMoreButton.getTemplate()}
        </section>

        <section class="films-list--extra">
          <h2 class="films-list__title">Top rated</h2>

          <div class="films-list__container"></div>
        </section>

        <section class="films-list--extra">
          <h2 class="films-list__title">Most commented</h2>

          <div class="films-list__container"></div>
        </section>
      </section>
    `.trim();
  }

  static getSortingArray(films, compareFunction, count = 2) {
    const filmsCopy = [...films];
    filmsCopy.sort(compareFunction);

    return filmsCopy.slice(-count);
  }
}
