import {getAds} from './api.js';


(async () => {
  const tickets = await getAds();
  console.log(tickets);
  console.log(typeof tickets);
  console.log(tickets.tickets[0]);
  console.log(typeof tickets.tickets);


  // allAds.slice(0, COUNT_OF_ADS).forEach((ad) => {
  //   createMarker(ad);
  //   disableMapFilters(false);
  // });
})();
