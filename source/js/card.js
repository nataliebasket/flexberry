import {getTimeFromMins, getWordEnd} from './utils.js';

const cardTemplate = document.querySelector('#template')
  .content.querySelector('.card');

const createCard = (obj) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardPrice = cardElement.querySelector('.card__price');
  const cardImage= cardElement.querySelector('.card__iata');
  const cardThere = cardElement.querySelectorAll('.card__title--towns');
  const cardTimeInOut = cardElement.querySelectorAll('.card__value--time-in-out');
  const cardDuration = cardElement.querySelectorAll('.card__value--duration');
  const cardStops= cardElement.querySelectorAll('.card__title--stops');
  const cardTransfers = cardElement.querySelectorAll('.card__value--transfers');

  cardPrice.textContent = `${obj.price} P`;
  cardImage.src = `https://pics.avs.io/99/36/${obj.carrier}.png`;
  cardThere[0].textContent = `${obj.segments[0].origin} - ${obj.segments[1].origin}`;
  cardThere[1].textContent = `${obj.segments[1].origin} - ${obj.segments[0].origin}`;

  for (let i = 0; i < 2; i++) {
    cardTimeInOut[i].textContent = obj.segments[i].date.slice(11, 16);
    cardDuration[i].textContent = getTimeFromMins(obj.segments[i].duration);
    cardStops[i].textContent = `${obj.segments[i].stops.length} ${getWordEnd(obj.segments[i].stops.length, 'пересадка', 'пересадки', 'пересадок')}`;
    cardTransfers[i].textContent = `${obj.segments[i].stops.join(', ')}`;
  }

  return cardElement;
};

export {createCard};
