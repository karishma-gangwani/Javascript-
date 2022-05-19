let mult = 0;
function calcMult(x) {
  for (let i = 0; i < x.length; i++) {
    mult = mult * x[i];
  }
  console.log(mult);
}
calcMult([1, 2, 3, 4]);
