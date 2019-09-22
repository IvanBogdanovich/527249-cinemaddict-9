import AbstractComponent from './abstract-component';

export default class NoFilms extends AbstractComponent {
  constructor() {
    super();
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
