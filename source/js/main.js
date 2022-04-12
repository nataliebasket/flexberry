// import {getData} from './api.js';

// getData();

fetch('https://front-test.beta.aviasales.ru/search',
  {mode: 'no-cors',

  }
)
  .then((response) => {
    console.log(response);
    if (response.ok) {
      console.log('yjyj');
      return response.json();
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log('Ошибка');
  });
