import AbstractComponent from './abstract-component';

export default class Navigation extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    const getFilterTemplate = ({title, count}) => {
      return `
        <a href="#${title}" class="main-navigation__item">
          ${title} <span class="main-navigation__item-count">${count}</span>
        </a>
      `.trim();
    };

    const getFiltersTemplate = (filters) => {
      return filters.map((filter) => getFilterTemplate(filter)).join(``);
    };

    return `
      <nav class="main-navigation">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        ${getFiltersTemplate(this._filters)}
      </nav>
    `.trim();
  }
}
