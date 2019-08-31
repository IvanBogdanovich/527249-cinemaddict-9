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


    // type: getRandomArrayElement(Array.from(new Set([...EVENT_TYPES.transfer, ...EVENT_TYPES.activity]))),
    // city: getRandomArrayElement(CITIES),
    // price: getRandomNumberInRange(1, 20) * 10, // цена в десятках
    // description: getRandomStringOutOfArray([
    //   `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    //   `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    //   `Fusce tristique felis at fermentum pharetra.`,
    //   `Aliquam id orci ut lectus varius viverra.`,
    //   `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    //   `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    //   `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    //   `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    //   `Aliquam erat volutpat.`,
    //   `Nunc fermentum tortor ac porta dapibus.`,
    //   `In rutrum ac purus sit amet tempus.`,
    // ], 3),
    // options: getRandomArrayElements(OPTIONS),
    // time: getRandomTimeInterval(),
    // isFavorite: getRandomBoolean(),
    // photos: [...Array(getRandomNumberInRange(1, 5))].map(() => getRandomNumberInRange(1, 5))
  };
};

getContentData();
console.log(getContentData());
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
  new Array(AMOUNT_CARDS_ALL_MOVIES).fill(``).forEach(() => cardListElement.insertAdjacentHTML(`beforeend`, createCardFilm()));
  new Array(AMOUNT_CARDS_TOP_RATED).fill(``).forEach(() => cardListTopRated.insertAdjacentHTML(`beforeend`, createCardFilm()));
  new Array(AMOUNT_CARDS_MOST_COMMENTED).fill(``).forEach(() => cardListMostComment.insertAdjacentHTML(`beforeend`, createCardFilm()));
};

renderContent();
