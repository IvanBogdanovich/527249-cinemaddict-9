import createSearchTemplate from './components/seacrh';
import createProfileTemplate from './components/profile';
import createMenuTemplate from './components/menu';
import createCardFilm from './components/card-film';
import createButtonShowMore from './components/show-more';
import createPopupDescFilm from './components/popup';

const siteFilmsList = document.querySelector(`.films-list`);
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);
const amountCardsAllMovies = 5;
const amountCardsTopRated = 2;
const amountCardsMostCommented = 2;
const cardListElement = document.querySelectorAll(`.films-list__container`)[0];
const cardListTopRated = document.querySelectorAll(`.films-list__container`)[1];
const cardListMostComment = document.querySelectorAll(`.films-list__container`)[2];

const renderContent = () => {
  siteHeaderElement.insertAdjacentHTML(`beforeend`, createSearchTemplate());
  siteHeaderElement.insertAdjacentHTML(`beforeend`, createProfileTemplate());
  siteMainElement.insertAdjacentHTML(`afterbegin`, createMenuTemplate());
  siteMainElement.insertAdjacentHTML(`beforeend`, createPopupDescFilm());
  siteFilmsList.insertAdjacentHTML(`beforeend`, createButtonShowMore());
  new Array(amountCardsAllMovies).fill(``).forEach(() => cardListElement.insertAdjacentHTML(`beforeend`, createCardFilm()));
  new Array(amountCardsTopRated).fill(``).forEach(() => cardListTopRated.insertAdjacentHTML(`beforeend`, createCardFilm()));
  new Array(amountCardsMostCommented).fill(``).forEach(() => cardListMostComment.insertAdjacentHTML(`beforeend`, createCardFilm()));
};

renderContent();
