const bills = [125, 555, 44];
const tips = [];
const total = [];
const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

caclTip = (x) => {
  x.forEach((element) => {
    if (element <= 300 && element >= 50) {
      tips.push(element * (15 / 100));
    } else tips.push(element * (20 / 100));
  });
  for (let i = 0; i < x.length; i++) {
    total.push([x[i] + tips[i]]);
  }
  return total;
};

console.log(caclTip(bills2));
