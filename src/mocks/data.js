import {
  getRandomBoolean,
  getRandomArrayElement,
  getRandomNumberInRange} from '../utils/utils';

import {
  TITLES,
  DIRECTORS,
  WRITERS,
  ACTORS,
  IMAGES,
  DESCRIPTIONS,
  COUNTRIES,
  EMOJIS,
  COMMENTS,
  LIST_GENRE,
  RELEASE_DATE
} from '../utils/constants';

const getComment = () => ({
  comment: getRandomArrayElement(COMMENTS),
  author: getRandomArrayElement(WRITERS),
  date: new Date(Date.now()).getDay(),
  emoji: getRandomArrayElement(EMOJIS),
});

const getComments = (count) => {
  return new Array(count).fill(``).map(getComment);
};

const getRandomDescription = (descriptions, count = 1) => {
  const radnomDescriptions = [];

  for (let i = 0; i < count; i++) {
    radnomDescriptions.push(getRandomArrayElement(descriptions));
  }

  return radnomDescriptions;
};

const generateMovieMock = () => ({
  image: getRandomArrayElement(IMAGES),
  title: getRandomArrayElement(TITLES),
  originalTitle: getRandomArrayElement(TITLES),
  rating: getRandomNumberInRange(0, 10).toFixed(1),
  director: getRandomArrayElement(DIRECTORS),
  writers: [...WRITERS],
  actors: [...ACTORS],
  releaseDate: getRandomArrayElement(RELEASE_DATE),
  runtime: getRandomNumberInRange(100, 180),
  country: getRandomArrayElement(COUNTRIES),
  genres: [...LIST_GENRE],
  description: getRandomDescription(DESCRIPTIONS, getRandomNumberInRange(1, 3)),
  age: getRandomNumberInRange(6, 18),
  isFavorite: getRandomBoolean(),
  isWatched: getRandomBoolean(),
  isInWatchlist: getRandomBoolean(),
  comments: getComments(getRandomNumberInRange(0, 50)),
});

export const getMovies = (count) => new Array(count).fill(``).map(generateMovieMock);
