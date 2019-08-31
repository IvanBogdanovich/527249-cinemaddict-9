export const AMOUNT_CARDS_ALL_MOVIES = 5;
export const AMOUNT_CARDS_TOP_RATED = 2;
export const AMOUNT_CARDS_MOST_COMMENTED = 2;


const getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomArrayElement = (array) => array[getRandomNumberInRange(0, array.length - 1)];

const getRandomStringOutOfArray = (array, maxLength) => {
  const arrayLength = getRandomNumberInRange(1, maxLength);
  return [...Array(arrayLength)].map(() => getRandomArrayElement(array)).join(` `);
};

const getContentData = () => {
  return {
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
  };
};
