import AbstractComponent from './abstract-component';

export default class FooterCounter extends AbstractComponent {
  constructor(count) {
    super();
    this._count = count;
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
