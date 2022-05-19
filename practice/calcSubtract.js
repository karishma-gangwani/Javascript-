// there is no need to define an array in this function

let subt = 0;
function calcSubtract(x) {
  for (let i = 0; i < x.length; i++) {
    subt = subt - x[i];
  }
  console.log(subt);
}
calcSubtract([4, 4, 3, 1]);
