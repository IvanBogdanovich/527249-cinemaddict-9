import {getMovies} from './mocks/data';
import PageController from './controllers/page-controller';

const filmsAmount = 30;
const films = getMovies(filmsAmount);
const mainElement = document.querySelector(`.main`);
const filmsControllerInstance = new PageController(mainElement, films);

filmsControllerInstance.init();
