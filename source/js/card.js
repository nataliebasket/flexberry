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
  cardTimeInOut[0].textContent = obj.segments[0].date.slice(11, 16);
  cardTimeInOut[1].textContent = obj.segments[1].date.slice(11, 16);
  cardDuration[0].textContent = getTimeFromMins(obj.segments[0].duration);
  cardDuration[1].textContent = getTimeFromMins(obj.segments[1].duration);
  cardStops[0].textContent = `${obj.segments[0].stops.length} ${getWordEnd(obj.segments[0].stops.length, 'пересадка', 'пересадки', 'пересадок')}`;
  cardStops[1].textContent = `${obj.segments[1].stops.length} ${getWordEnd(obj.segments[1].stops.length, 'пересадка', 'пересадки', 'пересадок')}`;
  cardTransfers[0].textContent = `${obj.segments[0].stops.toString()}`;
  cardTransfers[1].textContent = `${obj.segments[1].stops.toString()}`;

  return cardElement;
};

export {createCard};
