let largeNum = -Infinity;
function largest(x) {
  for (i = 0; i < x.length; i++) {
    if (largeNum < x[i]) {
      largeNum = x[i];
    }
  }
  return largeNum;
}
console.log(largest([100, 2, 200]));
