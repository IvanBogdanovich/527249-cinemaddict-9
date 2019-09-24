const getRandomArrayElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const getMovieFullDate = (date) => {
  return new Date(date).toLocaleDateString(`en-GB`, {
    day: `2-digit`,
    month: `long`,
    year: `numeric`,
  });
};

const getRandomBoolean = () => {
  return Boolean(Math.round(Math.random()));
};

const renderComponent = (container, component) => {
  return container.insertAdjacentHTML(`beforeend`, component);
};

const getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const Position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

const renderElement = (container, element, place) => {
  switch (place) {
    case Position.AFTERBEGIN:
      container.prepend(element);
      break;
    case Position.BEFOREEND:
      container.append(element);
      break;
  }
};

const deleteRenderElement = (element) => {
  if (element) {
    element.remove();
  }
};

const isEscKeyDown = (evt, action) => {
  if (evt.key === `Escape` || evt.key === `Esc`) {
    action();
  }
};

const sortByComments = (a, b) => a.comments.length - b.comments.length;

const sortByRating = (a, b) => a.rating - b.rating;

export {
  getRandomBoolean,
  getRandomArrayElement,
  getMovieFullDate,
  sortByComments,
  sortByRating,
  renderComponent,
  getRandomNumberInRange,
  renderElement,
  createElement,
  deleteRenderElement,
  Position,
  isEscKeyDown
};
