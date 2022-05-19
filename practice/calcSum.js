let sum = 0;
function CalcSum(x) {
  for (let i = 0; i < x.length; i++) {
    sum = sum + x[i];
  }
  console.log(sum);
}
CalcSum([1, 2, 3, 4]);
