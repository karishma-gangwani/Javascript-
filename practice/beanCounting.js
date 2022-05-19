// function countBs(x, character) {
//   let count = 0;
//   // for (let i = 0; i < x.length; i++) {
//   //   x[i] === character ? count++ : null;
//   }
//   return count;
// }
// console.log(countBs("kkktttrr", "t"));

// function countBs(x, character) {
//   let count = 0;
//   for (let i of x) {
//     if (i === character) count++;
//   }
//   return count;
// }
// console.log(countBs("kkktttrr", "t"));

function countBs(x, character) {
  let count = 0;
  for (let i in x) {
    if (x[i] === character) count++;
  }
  return count;
}
console.log(countBs("kkktttrr", "t"));
