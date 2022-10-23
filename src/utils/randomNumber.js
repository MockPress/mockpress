const randomNumber = (min, max) => {
  return Math.max(min, Math.floor(Math.random() * (max + 1)));
};

export default randomNumber;
