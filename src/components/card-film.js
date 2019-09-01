const createCardFilm = (data) => {
  return `<article class="film-card">
  <h3 class="film-card__title">${data.title}</h3>
  <p class="film-card__rating">${data.rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${data.releaseDate}</span>
    <span class="film-card__duration">${data.duration}</span>
    <span class="film-card__genre">${data.genre}</span>
  </p>
  <img src="${data.poster}" alt="" class="film-card__poster">
  <p class="film-card__description">${data.description}</p>
  <a class="film-card__comments">${data.amountComments} comments</a>
  <form class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
  </form>
</article>`;
};

export {
  createCardFilm
};
