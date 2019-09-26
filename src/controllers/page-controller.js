import Search from '../components/search';
import Navigation from '../components/navigation';
import Popup from '../components/popup';
import Profile from '../components/profile';
import CardFilm from '../components/card-film';
import CardFilms from '../components/card-films';
import Sort from '../components/sort';
import NoFilms from '../components/no-films';
import ShowMoreButton from '../components/show-more';
import FooterCounter from '../components/footer';
import {getFilterCount} from '../components/filter';
import {
  renderElement,
  sortByComments,
  sortByRating,
  sortFilms,
  deleteRenderElement,
  isEscKeyDown
} from '../utils/utils';

const AMOUNT_CARDS_WATCH_LIST_START = 5;

export default class PageController {
  constructor(container, filmCards) {
    this._container = container;
    this._filmCards = filmCards;
    this._filmsOnPage = AMOUNT_CARDS_WATCH_LIST_START;
    this._sortedFilms = filmCards.slice();
    this._headerElement = document.querySelector(`header`);
    this._footerElement = document.querySelector(`footer`);
    this._footerCounter = new FooterCounter();
    this._searchComponent = new Search();
    this._emptyFilmsComponent = new NoFilms();
    this._menuComponent = new Navigation(getFilterCount(filmCards));
    this._profileComponent = new Profile(filmCards);
    this._sortComponent = new Sort();
    this._filmsComponent = new CardFilms();
    this._moreButtonComponent = new ShowMoreButton();
    this._mostCommentedFilms = sortByComments(filmCards).slice(0, 2);
    this._topRatedFilms = sortByRating(filmCards).slice(0, 2);
    this._topRatedFilmsContainer = this._filmsComponent.getElement().querySelector(`.films-list__container--rated`);
    this._mostCommentedFilmsContainer = this._filmsComponent.getElement().querySelector(`.films-list__container--commented`);
    this._filmsListElement = this._filmsComponent.getElement().querySelector(`.films-list`);
    this._filmsContainerElement = this._filmsComponent.getElement().querySelector(`.films-list__container`);
  }

  _renderFilm(film, container) {
    const filmInstance = new CardFilm(film);
    const filmDetailsInstance = new Popup(film);
    const onMoviePopUpEscPress = (evt) => isEscKeyDown(evt, closeMoviePopUp);

    const closeMoviePopUp = () => {
      this._container.removeChild(filmDetailsInstance.getElement());
      document.removeEventListener(`keydown`, onMoviePopUpEscPress);
    };

    const openMoviePopup = () => {
      this._container.appendChild(filmDetailsInstance.getElement());
      document.addEventListener(`keydown`, onMoviePopUpEscPress);
    };

    filmInstance.getElement()
      .addEventListener(`click`, openMoviePopup);

    filmDetailsInstance.getElement()
      .querySelector(`.film-details__close-btn`)
      .addEventListener(`click`, closeMoviePopUp);

    filmDetailsInstance.getElement().querySelector(`textarea`)
      .addEventListener(`focus`, () => {
        document.removeEventListener(`keydown`, onMoviePopUpEscPress);
      });

    filmDetailsInstance.getElement().querySelector(`textarea`)
      .addEventListener(`blur`, () => {
        document.addEventListener(`keydown`, onMoviePopUpEscPress);
      });

    renderElement(container, filmInstance.getElement());
  }

  _renderFilms(films, container) {
    films.forEach((film) => this._renderFilm(film, container));
  }

  _renderLeftFilms() {
    this._sortedFilms
      .slice(this._filmsOnPage, (this._filmsOnPage + AMOUNT_CARDS_WATCH_LIST_START))
      .forEach((film) => this._renderFilm(film, this._filmsContainerElement));

    this._filmsOnPage = this._filmsOnPage + AMOUNT_CARDS_WATCH_LIST_START;
    let leftFilmsRender = this._sortedFilms.length - this._filmsOnPage;

    if (leftFilmsRender <= 0) {
      deleteRenderElement(this._moreButtonComponent.getElement());
    }
  }

  _onSortLinkClick(evt) {
    evt.preventDefault();

    this._filmsOnPage = AMOUNT_CARDS_WATCH_LIST_START;

    if (this._filmCards.length > 5) {
      renderElement(this._filmsListElement, this._moreButtonComponent.getElement());
    }

    if (evt.target.tagName === `A`) {
      const sortType = evt.target.dataset.sortType;
      this._sortedFilms = sortFilms(this._filmCards, sortType);
      this._filmsContainerElement.innerHTML = ``;
      this._renderFilms(this._sortedFilms.slice(0, AMOUNT_CARDS_WATCH_LIST_START), this._filmsContainerElement);
    }
  }

  _renderFooterCounter() {
    const footerAmountFilms = document.querySelector(`.footer__counter`);
    footerAmountFilms.textContent = `${this._filmCards.length}`;
  }

  init() {
    renderElement(this._headerElement, this._searchComponent.getElement());
    renderElement(this._headerElement, this._searchComponent.getElement());
    renderElement(this._headerElement, this._profileComponent.getElement());
    renderElement(this._container, this._menuComponent.getElement());

    if (this._filmCards.length === 0) {
      renderElement(this._container, this._emptyFilmsComponent.getElement());
      return;
    }

    if (this._filmCards.length > AMOUNT_CARDS_WATCH_LIST_START) {
      renderElement(this._filmsListElement, this._moreButtonComponent.getElement());

      const onLoadMoreButtonClick = () => {
        this._renderLeftFilms(this._filmCards);
      };

      this._moreButtonComponent.getElement().addEventListener(`click`, onLoadMoreButtonClick);
    }

    renderElement(this._container, this._sortComponent.getElement());
    renderElement(this._container, this._filmsComponent.getElement());
    this._renderFilms(this._filmCards.slice(0, AMOUNT_CARDS_WATCH_LIST_START), this._filmsContainerElement);
    this._renderFilms(this._topRatedFilms, this._topRatedFilmsContainer);
    this._renderFilms(this._mostCommentedFilms, this._mostCommentedFilmsContainer);
    this._sortComponent.getElement().addEventListener(`click`, (evt) => this._onSortLinkClick(evt));
    this._renderFooterCounter();
  }
}
