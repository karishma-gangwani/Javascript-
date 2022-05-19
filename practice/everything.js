function every(array, test) {
  for (let element of array) {
    if (test(element) === false) {
      return false;
    }
  }
  return true;
}
console.log(every([1, 2, 3], (n) => n < 10));
