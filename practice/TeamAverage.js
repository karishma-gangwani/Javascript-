let Dolphin = [96, 108, 89, 97, 112, 101, 97, 112, 101];
let Koalas = [88, 91, 110, 109, 95, 123, 109, 95, 106];

// const average = (x) => {
//   let xSum = 0;

//   x.forEach((i) => {
//     xSum = xSum + i;
//   });
//   return xSum / 9;
// };

const average = (x) => x.reduce(xSum, 0) / 9;
const xSum = (total, num) => total + num;

KoalaAvg = average(Koalas);
DolphinAvg = average(Dolphin);

// if (KoalaAvg === DolphinAvg) {
//   console.log("there is a draw!");
// } else if (KoalaAvg > DolphinAvg) {
//   console.log("Team Koala wins!");
// } else {
//   console.log("Team Dolphin wins!");
// }

KoalaAvg === DolphinAvg
  ? console.log("There is a draw!")
  : KoalaAvg > DolphinAvg
  ? console.log("Team Koala wins!")
  : console.log("Team Dolphin wins!");
