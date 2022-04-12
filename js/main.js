import {getAds} from './api.js';
import {createCard} from './card.js';

(async () => {
  const tickets = await getAds();
  // console.log(tickets);
  // console.log(typeof tickets);
  // console.log(tickets.tickets[0]);
  // console.log(typeof tickets.tickets);

  tickets.tickets.slice(100, 115).forEach((card) => {
    document.querySelector('.search-tikets__container').append(createCard(card));
  });
})();
