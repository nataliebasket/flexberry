const getCards = async () => {
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

export {getCards};
