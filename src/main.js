import createSearchTemplate from './components/seacrh';
import createProfileTemplate from './components/profile';
import createMenuTemplate from './components/menu';
import {createCardFilm} from './components/card-film';
import createButtonShowMore from './components/show-more';
import createPopupDescFilm from './components/popup';
import {
  AMOUNT_CARDS_MOST_COMMENTED,
  AMOUNT_CARDS_TOP_RATED,
  AMOUNT_CARDS_ALL_MOVIES} from './data/data';

import {getContentData} from './data/data';

const siteFilmsList = document.querySelector(`.films-list`);
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);
const cardListElement = document.querySelectorAll(`.films-list__container`)[0];
const cardListTopRated = document.querySelectorAll(`.films-list__container`)[1];
const cardListMostComment = document.querySelectorAll(`.films-list__container`)[2];

const renderContent = () => {
  siteHeaderElement.insertAdjacentHTML(`beforeend`, createSearchTemplate());
  siteHeaderElement.insertAdjacentHTML(`beforeend`, createProfileTemplate());
  siteMainElement.insertAdjacentHTML(`afterbegin`, createMenuTemplate());
  siteMainElement.insertAdjacentHTML(`beforeend`, createPopupDescFilm());
  siteFilmsList.insertAdjacentHTML(`beforeend`, createButtonShowMore());
  new Array(AMOUNT_CARDS_ALL_MOVIES).fill(``).forEach(() => cardListElement.insertAdjacentHTML(`beforeend`, createCardFilm(getContentData())));
  new Array(AMOUNT_CARDS_TOP_RATED).fill(``).forEach(() => cardListTopRated.insertAdjacentHTML(`beforeend`, createCardFilm(getContentData())));
  new Array(AMOUNT_CARDS_MOST_COMMENTED).fill(``).forEach(() => cardListMostComment.insertAdjacentHTML(`beforeend`, createCardFilm(getContentData())));
};

renderContent();
