import {getCards} from './api.js';
import {createCard} from './card.js';

const checkboxForm = document.querySelector('.form');
const cheapButton = document.querySelector('.buttons__button--cheap');
const fastButton = document.querySelector('.buttons__button--fast');
const tiketsWrapper = document.querySelector('.search-tikets__wrapper');

let tickets;
let transfers;
let newTickets;
let cheap = false;
let fast = false;

(async () => {
  tickets = await getCards();
  tickets.tickets.slice(100, 105).forEach((card) => {
    document.querySelector('.search-tikets__wrapper').append(createCard(card));
  });
})();

const getSelectTransfers = () => Array.from(document.querySelectorAll('input[name="transfers"]:checked'), (cb) => cb.value);

const checkFilter = (ticket) => {
  transfers = getSelectTransfers();
  if (!transfers.length) {return true;}
  return transfers.includes('all') || (transfers.includes(`${ticket.segments[0].stops.length}`) && transfers.includes(`${ticket.segments[1].stops.length}`));
};

const createTickets = (isCheap, isFast) => {
  tiketsWrapper.innerHTML = '';
  newTickets = tickets.tickets.filter((ticket) => checkFilter(ticket));
  if (isCheap) { newTickets.sort( (a, b) => a.price - b.price );}
  if (isFast) { newTickets.sort( (a, b) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration));}
  newTickets.slice(0, 5).forEach((card) => {
    document.querySelector('.search-tikets__wrapper').append(createCard(card));
  });
};

const onChangeCheckboxForm = () => {
  cheap = false;
  fast = false;
  createTickets(cheap, fast);
};

const onClickCheapButton = () => {
  cheap = true;
  fast = false;
  createTickets(cheap, fast);
};

const onClickFastButton = () => {
  cheap = false;
  fast = true;
  createTickets(cheap, fast);
};

cheapButton.addEventListener('click', onClickCheapButton);
fastButton.addEventListener('click', onClickFastButton);
checkboxForm.addEventListener('change', onChangeCheckboxForm);
