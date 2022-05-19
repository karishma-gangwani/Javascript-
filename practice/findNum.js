function findNum(x, num) {
  for (let i = 0; i < x.length; i++) {
    if (num == x[i]) {
      return i;
    }
  }
  return "This number is not in the array";
}
console.log(findNum([100, 2, 4], 1000));
