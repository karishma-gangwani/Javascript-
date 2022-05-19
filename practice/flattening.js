let array = [[1, 2, 3], [4, 5, 6], [7]];
function concatenate(array) {
  return array.reduce((a, b) => a.concat(b));
}
console.log(concatenate(array));
