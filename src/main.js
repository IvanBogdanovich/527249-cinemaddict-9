import Search from './components/search';
import Navigation from './components/navigation';
import Popup from './components/popup';
import Profile from './components/profile';
import CardFilm from './components/card-film';
import CardFilms from './components/card-films';
import FooterCounter from './components/footer';
import NoFilms from './components/no-films';
import {getFilterCount} from './components/filter';
import {getMovies} from './mocks/data';
import {
  Position,
  renderElement,
  sortByComments,
  sortByRating,
  deleteRenderElement,
  isEscKeyDown
} from './utils/utils';

const filmsAmount = 8;
const filmsArray = getMovies(filmsAmount);
const AMOUNT_CARDS_WATCH_LIST_START = 5;

const headerElement = document.querySelector(`header`);
const mainElement = document.querySelector(`.main`);
const footerElement = document.querySelector(`.footer`);
const board = new CardFilms().getElement();
const cardListWrapper = board.querySelector(`.films-list .films-list__container`);
const cardListMostCommentWrapper = board.querySelectorAll(`.films-list--extra .films-list__container`)[1];
const cardListTopRatedWrapper = board.querySelectorAll(`.films-list--extra .films-list__container`)[0];

const renderSearch = () => {
  const searchInstance = new Search();

  renderElement(headerElement, searchInstance.getElement(), Position.BEFOREEND);
};

const renderProfile = (films) => {
  const profileInstance = new Profile(films);

  renderElement(headerElement, profileInstance.getElement(), Position.BEFOREEND);
};

const renderNavigation = (filters) => {
  const navigationInstance = new Navigation(filters);

  renderElement(mainElement, navigationInstance.getElement(), Position.BEFOREEND);
};

const renderFooterCounter = (count) => {
  const footerInstance = new FooterCounter(count);

  renderElement(footerElement, footerInstance.getElement(), Position.BEFOREEND);
};

const renderFilms = (films) => {
  const fragment = document.createDocumentFragment();

  films.forEach((film) => {
    const movieInstance = new CardFilm(film);
    const movieDetailsInstance = new Popup(film);
    const onFilmPopUpEscPress = (evt) => isEscKeyDown(evt, closeFilmPopup);

    const closeFilmPopup = () => {
      mainElement.removeChild(movieDetailsInstance.getElement());
    };

    const openFilmPopup = () => {
      mainElement.appendChild(movieDetailsInstance.getElement());
      document.addEventListener(`keydown`, onFilmPopUpEscPress);
    };

    movieInstance.getElement()
      .addEventListener(`click`, openFilmPopup);

    movieDetailsInstance.getElement()
      .querySelector(`.film-details__close-btn`)
      .addEventListener(`click`, closeFilmPopup);

    movieDetailsInstance.getElement().querySelector(`textarea`)
      .addEventListener(`focus`, () => {
        document.removeEventListener(`keydown`, onFilmPopUpEscPress);
      });

    movieDetailsInstance.getElement().querySelector(`textarea`)
      .addEventListener(`blur`, () => {
        document.addEventListener(`keydown`, onFilmPopUpEscPress);
      });

    fragment.appendChild(movieInstance.getElement());
  });

  return fragment;
};

const renderBoard = (films) => {
  if (films.length === 0) {
    const noFIlmsInstance = new NoFilms();
    renderElement(mainElement, noFIlmsInstance.getElement(), Position.BEFOREEND);
  } else {
    cardListWrapper.appendChild(renderFilms(films.slice(0, AMOUNT_CARDS_WATCH_LIST_START)));
    cardListMostCommentWrapper.appendChild(renderFilms(CardFilms.getSortingArray(films, sortByComments)));
    cardListTopRatedWrapper.appendChild(renderFilms(CardFilms.getSortingArray(films, sortByRating)));
    renderElement(mainElement, board, Position.BEFOREEND);

    const loadMoreButton = mainElement.querySelector(`.films-list__show-more`);

    let CARDS_FILMS_PAGE = 5;
    let AMOUNT_FILMS_TO_RENDER = filmsArray.length - CARDS_FILMS_PAGE;

    const renderRestFilms = () => {
      cardListWrapper.appendChild(renderFilms(filmsArray.slice(CARDS_FILMS_PAGE, (CARDS_FILMS_PAGE + AMOUNT_CARDS_WATCH_LIST_START))));

      CARDS_FILMS_PAGE = CARDS_FILMS_PAGE + AMOUNT_CARDS_WATCH_LIST_START;
      AMOUNT_FILMS_TO_RENDER = filmsArray.length - CARDS_FILMS_PAGE;

      if (AMOUNT_FILMS_TO_RENDER <= 0) {
        deleteRenderElement(loadMoreButton);
      }
    };

    const onLoadMoreButtonClick = () => {
      renderRestFilms();
    };

    loadMoreButton.addEventListener(`click`, onLoadMoreButtonClick);
  }

  let amountFilmsMostCommented = CardFilms.getSortingArray(films, sortByComments).length;
  let amountFilmsTopRated = CardFilms.getSortingArray(films, sortByRating).length;
  renderFooterCounter(amountFilmsMostCommented + amountFilmsTopRated + filmsAmount);
};

renderSearch();
renderProfile(filmsArray);
renderNavigation(getFilterCount(filmsArray));
renderBoard(filmsArray);
