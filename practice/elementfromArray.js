let nth = (array, n) => {
  for (let i = 0; i < array.length; i++) {
    if ((i = n)) {
      return array[i];
    } else {
      return null;
    }
  }
};
console.log(nth([10, 20, 30], 2));
