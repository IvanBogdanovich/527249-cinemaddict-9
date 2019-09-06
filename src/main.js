import createSearchTemplate from './components/seacrh';
import createProfileTemplate from './components/profile';
import createMenuTemplate from './components/menu';
import createCardFilm from './components/card-film';
import createButtonShowMore from './components/show-more';
import createPopupDescFilm from './components/popup';
import {
  AMOUNT_CARDS_MOST_COMMENTED,
  AMOUNT_CARDS_TOP_RATED,
  AMOUNT_CARDS_WATCH_LIST,
  AMOUNT_CARDS_WATCH_LIST_START,
  AMOUNT_FULL_FIMS,
  getMocksCardFilm,
  getMocksProfile} from './mocks/data';

const siteFilmsList = document.querySelector(`.films-list`);
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);
const cardListElement = document.querySelectorAll(`.films-list__container`)[0];
const cardListTopRated = document.querySelectorAll(`.films-list__container`)[1];
const cardListMostComment = document.querySelectorAll(`.films-list__container`)[2];
const counterFooter = document.querySelector(`.footer__counter`);

const getCards = (amount) => {
  new Array(amount).fill(``).forEach(() => cardListElement.insertAdjacentHTML(`beforeend`, createCardFilm(getMocksCardFilm(), actionPopup())));
};

const getShowMoreFilms = () => {
  const buttonShowMore = document.querySelector(`.films-list__show-more`);
  let row = AMOUNT_CARDS_WATCH_LIST / AMOUNT_CARDS_WATCH_LIST_START;
  let counter = 1;
  row = Math.floor(row);
  buttonShowMore.addEventListener(`click`, () => {
    counter += 1;
    if (counter <= row) {
      getCards(AMOUNT_CARDS_WATCH_LIST_START);
      if (AMOUNT_CARDS_WATCH_LIST_START * counter === AMOUNT_CARDS_WATCH_LIST) {
        buttonShowMore.style.opacity = 0;
      }
    } else {
      getCards(AMOUNT_CARDS_WATCH_LIST - row * AMOUNT_CARDS_WATCH_LIST_START);
      buttonShowMore.style.opacity = 0;
    }
  });
};

const actionPopup = (item) => {
  const buttonsOpen = document.querySelectorAll(`.film-card__open-popup`);
  for (item of buttonsOpen) {
    item.addEventListener(`click`, () => {
      event.preventDefault();
      siteMainElement.insertAdjacentHTML(`beforeend`, createPopupDescFilm(getMocksCardFilm(), `block`));
      document.querySelector(`.film-details__close-btn`).addEventListener(`click`, () => document.querySelector(`.film-details`).remove());
    });
  }
};

const renderContent = () => {
  siteHeaderElement.insertAdjacentHTML(`beforeend`, createSearchTemplate());
  siteHeaderElement.insertAdjacentHTML(`beforeend`, createProfileTemplate(getMocksProfile()));
  siteMainElement.insertAdjacentHTML(`afterbegin`, createMenuTemplate(AMOUNT_CARDS_WATCH_LIST));
  siteFilmsList.insertAdjacentHTML(`beforeend`, createButtonShowMore());
  counterFooter.insertAdjacentHTML(`beforeend`, AMOUNT_FULL_FIMS);
  new Array(AMOUNT_CARDS_WATCH_LIST_START).fill(``).forEach(() => cardListElement.insertAdjacentHTML(`beforeend`, createCardFilm(getMocksCardFilm())));
  new Array(AMOUNT_CARDS_TOP_RATED).fill(``).forEach(() => cardListTopRated.insertAdjacentHTML(`beforeend`, createCardFilm(getMocksCardFilm())));
  new Array(AMOUNT_CARDS_MOST_COMMENTED).fill(``).forEach(() => cardListMostComment.insertAdjacentHTML(`beforeend`, createCardFilm(getMocksCardFilm())));
};

renderContent();
getShowMoreFilms();
actionPopup();
