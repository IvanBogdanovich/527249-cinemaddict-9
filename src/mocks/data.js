import {
  getRandomBoolean,
  getRandomArrayElement,
  getRandomNumberInRange} from '../utils/utils';

const TITLES = [
  `Iron Monkey`,
  `Ran`,
  `Farewell My Concubine`,
  `Delicatessen`,
  `Way of the Dragon`,
  `Yeelen`,
  `The Fourth Man`,
  `Ghost in the Shell`,
  `Goodbye Lenin`,
  `Rififi`,
  `Loves of a Blonde`,
  `Leningrad Cowboys`,
  `Andrei Rublev`,
  `Run Lola Run`,
];

const DIRECTORS = [
  `Orson Welles`,
  `Stanley Kubrick`,
  `Charles Chaplin`,
  `Billy Wilde`,
  `Frank Capra`,
  `Woody Allen`,
  `Elia Kazan`,
  `Quentin Tarantino`,
];

const WRITERS = [
  `Asghar Farhadi`,
  `Eric Roth`,
  `Woody Allen`,
  `Chang-dong Lee`,
  `Richard Linklater`,
  `Lars von Trier`,
  `Quentin Tarantino`,
  `Sion Sono`
];

const ACTORS = [
  `Charles Chaplin`,
  `Marlon Brando`,
  `Jack Nicholson`,
  `Daniel Day-Lewis`,
  `Meryl Streep`,
  `Tom Hanks`,
  `Mohanlal`,
  `Robert De Niro`,
];

const IMAGES = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`,
];

const DESCRIPTIONS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`,
];

const COUNTRIES = [
  `USA`,
  `France`,
  `Ukraine`,
  `USSR`,
  `Russia`,
];

const EMOJIS = [
  `angry.png`,
  `puke.png`,
  `sleeping.png`,
  `smile.png`,
  `trophy.png`
];

const COMMENTS = [
  `Cool`,
  `Booooooooooring`,
  `Very very old. Meh`,
  `Almost two hours? Seriously?`,
  `Nice try`,
  `Fantastic`,
];

const LIST_GENRE = new Set([
  `musical`,
  `comedy`,
  `action`,
  `drama`,
  `horror`,
  `westerns`,
  `science`,
  `war`,
  `ganster`,
]);

const RELEASE_DATE = [
  `1920`,
  `1976`,
  `1929`,
  `1989`,
  `1999`,
  `1976`,
  `1965`,
  `1954`,
  `1943`
];

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
