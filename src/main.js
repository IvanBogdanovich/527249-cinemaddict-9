import createSearchTemplate from './components/seacrh';
import createProfileTemplate from './components/profile';
import createMenuTemplate from './components/menu';
import createCardFilm from './components/card-film';
import createButtonShowMore from './components/show-more';
import createPopupDescFilm from './components/popup';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteFilmsList = document.querySelector(`.films-list`);
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);

render(siteFilmsList, createButtonShowMore(), `beforeend`);
render(siteHeaderElement, createSearchTemplate(), `beforeend`);
render(siteHeaderElement, createProfileTemplate(), `beforeend`);
render(siteMainElement, createMenuTemplate(), `afterbegin`);
render(siteMainElement, createPopupDescFilm(), `beforeend`);

const cardListElement = document.querySelectorAll(`.films-list__container`)[0];
new Array(5).fill(``).forEach(() => render(cardListElement, createCardFilm(), `beforeend`));

const cardListTopRated = document.querySelectorAll(`.films-list__container`)[1];
new Array(2).fill(``).forEach(() => render(cardListTopRated, createCardFilm(), `beforeend`));

const cardListMostComment = document.querySelectorAll(`.films-list__container`)[2];
new Array(2).fill(``).forEach(() => render(cardListMostComment, createCardFilm(), `beforeend`));
