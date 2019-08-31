
import {dataFilms} from '../data/data';

const createCardFilm = () => {
  return `<article class="film-card">
  <h3 class="film-card__title">description</h3>
  <p class="film-card__rating">8.3</p>
  <p class="film-card__info">
    <span class="film-card__year">1929</span>
    <span class="film-card__duration">1h 55m</span>
    <span class="film-card__genre">Musical</span>
  </p>
  <img src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
  <p class="film-card__description">${description}</p>
  <a class="film-card__comments">5 comments</a>
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


//import {EVENT_TYPES, CITIES, OFFERS} from '../data';

// const getTripEventsEditItem = ({
//   eventIndex,
//   type,
//   city,
//   price,
//   time,
//   description,
//   isFavorite,
//   photos
// }) => {
//   return `
//   <li class="trip-events__item">
//   <form class="event  event--edit" action="#" method="post">
//     <header class="event__header">
//       <div class="event__type-wrapper">
//         <label class="event__type  event__type-btn" for="event-type-toggle-${eventIndex}">
//           <span class="visually-hidden">Choose event type</span>
//           <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
//         </label>
//         <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${eventIndex}" type="checkbox">
//         <div class="event__type-list">
//           <fieldset class="event__type-group">
//             <legend class="visually-hidden">Transfer</legend>
//             ${EVENT_TYPES.transfer.map((eventType) => getEventTypeItem(eventType, type, eventIndex))}
//           </fieldset>
//           <fieldset class="event__type-group">
//             <legend class="visually-hidden">Activity</legend>
//             ${EVENT_TYPES.activity.map((eventType) => getEventTypeItem(eventType, type, eventIndex))}
//           </fieldset>
//         </div>
//       </div>
//       <div class="event__field-group  event__field-group--destination">
//         <label class="event__label  event__type-output" for="event-destination-${eventIndex}">
//           ${type} to
//         </label>
//         <input class="event__input  event__input--destination" id="event-destination-${eventIndex}" type="text" name="event-destination" value="${city}" list="destination-list-${eventIndex}">
//         <datalist id="destination-list-${eventIndex}">
//           ${[...CITIES].map((optionCity) => `<option value="${optionCity}"></option>`).join(``).trim()}
//         </datalist>
//       </div>
//       <div class="event__field-group  event__field-group--time">
//         <label class="visually-hidden" for="event-start-time-${eventIndex}">
//           From
//         </label>
//         <input class="event__input  event__input--time" id="event-start-time-${eventIndex}" type="text" name="event-start-time" value="${time.start}">
//         &mdash;
//         <label class="visually-hidden" for="event-end-time-${eventIndex}">
//           To
//         </label>
//         <input class="event__input  event__input--time" id="event-end-time-${eventIndex}" type="text" name="event-end-time" value="${time.end}">
//       </div>
//       <div class="event__field-group  event__field-group--price">
//         <label class="event__label" for="event-price-${eventIndex}">
//           <span class="visually-hidden">Price</span>
//           &euro;
//         </label>
//         <input class="event__input  event__input--price" id="event-price-${eventIndex}" type="text" name="event-price" value="${price}">
//       </div>
//       <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
//       <button class="event__reset-btn" type="reset">Delete</button>
//       <input id="event-favorite-${eventIndex}" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" ${isFavorite ? `checked` : ``}>
//       <label class="event__favorite-btn" for="event-favorite-${eventIndex}">
//         <span class="visually-hidden">Add to favorite</span>
//         <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
//           <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
//         </svg>
//       </label>
//       <button class="event__rollup-btn" type="button">
//         <span class="visually-hidden">Open event</span>
//       </button>
//     </header>
//     <section class="event__details">
//       <section class="event__section  event__section--offers">
//         <h3 class="event__section-title  event__section-title--offers">Offers</h3>
//         <div class="event__available-offers">
//         ${OFFERS.map((offer) => getOfferSelector(offer)).join(``)}
//         </div>
//       </section>
//       <section class="event__section  event__section--destination">
//         <h3 class="event__section-title  event__section-title--destination">Destination</h3>
//         <p class="event__destination-description">${description}</p>
//         <div class="event__photos-container">
//           <div class="event__photos-tape">
//           ${photos.map((photo) => `<img class="event__photo" src="img/photos/${photo}.jpg" alt="Event photo"></img>`).join(``).trim()}
//           </div>
//         </div>
//       </section>
//     </section>
//   </form>
// </li>
//   `.trim();
// };

// const getEventTypeItem = (eventType, type, eventIndex) => {
//   return `
//     <div class="event__type-item">
//       <input id="event-type-${eventType}-${eventIndex}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${eventType}" ${type === eventType ? `checked` : ``}>
//       <label class="event__type-label  event__type-label--${eventType}" for="event-type-${eventType}-${eventIndex}">${eventType}</label>
//     </div>
//   `;
// };

// const getOfferSelector = (offer, eventIndex) => {
//   return `
//     <div class="event__offer-selector">
//       <input class="event__offer-checkbox  visually-hidden" id="${offer.name}-${eventIndex}" type="checkbox" name="${offer.name}" ${offer.checked ? `checked` : ``}>
//       <label class="event__offer-label" for="${offer.name}-${eventIndex}">
//         <span class="event__offer-title">${offer.title}</span>
//         &plus;
//         &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
//       </label>
//     </div>
//   `.trim();
// };

// export {
//   getTripEventsEditItem
// };
