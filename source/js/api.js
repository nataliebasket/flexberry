// const getData = () => fetch('./js/response-example.json')
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(() => {
//     console.log('Ошибка');
//   });

// export {getData};

const getAds = async () => {
  let response;
  try {
    response = await fetch('./js/response-example.json');
  }
  catch (err) {
    return [];
  }
  const tickets = await response.json();
  return tickets;
};

export {getAds};
