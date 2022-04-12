export const getTimeFromMins = (mins) => {
  const hours = Math.trunc(mins/60);
  const minutes = mins % 60;
  return `${hours}ч ${minutes}м`;
};

export const getWordEnd = (n, form1, form2, form3) => {
  n = Math.abs(n) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) {
    return form3;
  }
  if (n1 > 1 && n1 < 5) {
    return form2;
  }
  if (n1 === 1) {
    return form1;
  }
  return form3;
};
