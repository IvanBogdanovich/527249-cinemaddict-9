export const AMOUNT_CARDS_WATCH_LIST_START = 5;
export const AMOUNT_CARDS_WATCH_LIST = 17;
export const AMOUNT_CARDS_TOP_RATED = 2;
export const AMOUNT_CARDS_MOST_COMMENTED = 2;
export const AMOUNT_FULL_FIMS = AMOUNT_CARDS_WATCH_LIST
 + AMOUNT_CARDS_TOP_RATED
 + AMOUNT_CARDS_MOST_COMMENTED;

const getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomArrayElement = (array) => array[getRandomNumberInRange(0, array.length - 1)];

const getRandomStringOutOfArray = (array, maxLength) => {
  const arrayLength = getRandomNumberInRange(1, maxLength);
  return [...Array(arrayLength)].map(() => getRandomArrayElement(array)).join(` `);
};

const listGenre = new Set([
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

export const getMocksCardFilm = () => {
  return {
    poster: getRandomArrayElement([
      `./images/posters/made-for-each-other.png`,
      `./images/posters/popeye-meets-sinbad.png`,
      `./images/posters/sagebrush-trail.jpg`,
      `./images/posters/santa-claus-conquers-the-martians.jpg`,
      `./images/posters/the-dance-of-life.jpg`,
      `./images/posters/the-great-flamarion.jpg`,
      `./images/posters/the-man-with-the-golden-arm.jpg`
    ]),
    title: getRandomStringOutOfArray([
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
      `Run Lola Run`
    ], 1),
    description: getRandomStringOutOfArray([
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
    ], 3),
    rating: getRandomNumberInRange(1, 10) + (+Math.random().toFixed(1)),
    releaseDate: getRandomStringOutOfArray([
      `1920`,
      `1976`,
      `1929`,
      `1989`,
      `1999`,
      `1976`,
      `1965`,
      `1954`,
      `1943`
    ], 1),
    duration: getRandomStringOutOfArray([
      `1h 55mm`,
      `1h 33mm`,
      `1h 43mm`,
      `1h 20mm`,
      `2h 00mm`,
      `1h 59mm`,
      `1h 12mm`,
      `2h 15mm`,
      `1h 23mm`
    ], 1),
    genre: (getRandomStringOutOfArray([...listGenre], 1)),
    amountComments: getRandomNumberInRange(1, 1000),
    comments: [
      {
        text: getRandomStringOutOfArray([
          `Interesting setting and a good cast`,
          `Booooooooooring`,
          `Very very old. Meh`,
          `Almost two hours? Seriously?`
        ], 1),
        emoji: getRandomStringOutOfArray([
          `./images/emoji/smile.png`,
          `./images/emoji/sleeping.png`,
          `./images/emoji/puke.png`,
          `./images/emoji/angry.png`
        ], 1),
        author: getRandomStringOutOfArray([
          `John Doe`,
          `Tim Macoveev`
        ], 1),
        dateDays: getRandomStringOutOfArray([
          `3`,
          `2`,
          `Today`
        ], 1),
      },
    ]
  };
};

export const getMocksProfile = () => {
  return {
    profile: `Movie Buff`
  };
};
