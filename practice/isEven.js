// function isEven(x) {
//   if (x % 2 === 0) {
//     return "True";
//   } else if (x % 2 === 1) {
//     return "False";
//   } else {
//     return isEven(-x);
//   }
// }
// console.log(isEven(-7));

function isEven(x) {
  return x > 1 ? isEven(x - 2) : x >= 0 ? !x : isEven(-x);
}
console.log(isEven(-5));
