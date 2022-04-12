const getData = () => fetch(
  'https://front-test.beta.aviasales.ru/search',
  {
    method: 'GET',
    credentials: 'same-origin',
  },
)
  .then((response) => {
    console.log(response);
    if (response.ok) {
      console.log(response);
      return response.json();
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log('Ошибка');
  });

export {getData};
