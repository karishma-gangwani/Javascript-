const bills = [125, 555, 44];
const total = [];
const tips = [];
const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const newCalcTip = function (x) {
  for (let i = 0; i < x.length; i++) {
    x[i] >= 300 && x[i] <= 50 ? tips.push(x[i] * 0.15) : tips.push(x[i] * 0.2);
    total.push(tips[i] + x[i]);
  }
  return total;
};
console.log(newCalcTip(bills2));

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(total));
