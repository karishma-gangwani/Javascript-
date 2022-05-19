let smallNum = Infinity;
function smallest(x) {
  for (i = 0; i < x.length; i++) {
    if (smallNum > x[i]) {
      smallNum = x[i];
    }
  }
  return smallNum;
}
console.log(smallest([100, 2, -1]));
