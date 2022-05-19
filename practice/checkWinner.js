const Dolphin1 = [44, 23, 71];
const Dolphin2 = [85, 54, 41];
const Koala1 = [65, 54, 49];
const Koala2 = [23, 34, 27];

calcAverage = (x) => {
  let xSum = 0;
  x.forEach((element) => {
    xSum = xSum + element;
  });
  return xSum / 3;
};

checkWinner = (avgDolphins, avgKoalas) => {
  return avgDolphins >= 2 * avgKoalas
    ? `Dolphins win (${avgDolphins} vs ${avgKoalas})`
    : avgKoalas >= 2 * avgDolphins
    ? `Koalas win (${avgKoalas} vs ${avgDolphins})`
    : "No wins declared";
};

console.log(checkWinner(calcAverage(Dolphin1), calcAverage(Koala1)));
