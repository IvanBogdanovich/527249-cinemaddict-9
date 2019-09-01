import createSearchTemplate from './components/seacrh';
import {createProfileTemplate} from './components/profile';
import {createMenuTemplate} from './components/menu';
import {createCardFilm} from './components/card-film';
import createButtonShowMore from './components/show-more';
import {createPopupDescFilm} from './components/popup';
import {
  AMOUNT_CARDS_MOST_COMMENTED,
  AMOUNT_CARDS_TOP_RATED,
  AMOUNT_CARDS_ALL_MOVIES,
  AMOUNT_FULL_FIMS,
  getMocksCardFilm,
  getMocksProfile} from './mocks/data';

const siteFilmsList = document.querySelector(`.films-list`);
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);
const cardListElement = document.querySelectorAll(`.films-list__container`)[0];
const cardListTopRated = document.querySelectorAll(`.films-list__container`)[1];
const cardListMostComment = document.querySelectorAll(`.films-list__container`)[2];

const renderContent = () => {
  siteHeaderElement.insertAdjacentHTML(`beforeend`, createSearchTemplate());
  siteHeaderElement.insertAdjacentHTML(`beforeend`, createProfileTemplate(getMocksProfile()));
  siteMainElement.insertAdjacentHTML(`afterbegin`, createMenuTemplate(AMOUNT_FULL_FIMS));
  siteMainElement.insertAdjacentHTML(`beforeend`, createPopupDescFilm(getMocksCardFilm()));
  siteFilmsList.insertAdjacentHTML(`beforeend`, createButtonShowMore());
  new Array(AMOUNT_CARDS_ALL_MOVIES).fill(``).forEach(() => cardListElement.insertAdjacentHTML(`beforeend`, createCardFilm(getMocksCardFilm())));
  new Array(AMOUNT_CARDS_TOP_RATED).fill(``).forEach(() => cardListTopRated.insertAdjacentHTML(`beforeend`, createCardFilm(getMocksCardFilm())));
  new Array(AMOUNT_CARDS_MOST_COMMENTED).fill(``).forEach(() => cardListMostComment.insertAdjacentHTML(`beforeend`, createCardFilm(getMocksCardFilm())));
};

renderContent();

const getShowMoreFilms = () => {
  const buttonShowMore = document.querySelector(`.films-list__show-more`);
  buttonShowMore.onclick = () => {
    new Array(AMOUNT_CARDS_ALL_MOVIES).fill(``).forEach(() => cardListElement.insertAdjacentHTML(`beforeend`, createCardFilm(getMocksCardFilm())));
    buttonShowMore.setAttribute(`disabled`, `disabled`);
  };
};

getShowMoreFilms(); // Не знаю куда правильно вынести

const closePopup = () => {
  const buttonCLose = document.querySelector(`.film-details__close-btn`);
  const popup = document.querySelector(`.film-details`);
  buttonCLose.onclick = () => {
    popup.setAttribute(`hidden`, `hidden`);
  };
};

closePopup(); // Временное решение что бы скрывать попап
