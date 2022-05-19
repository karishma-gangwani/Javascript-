// tipCalc = (bill) => {
//   if (bill <= 300 && bill >= 50) {
//     return (tip = bill * (15 / 100));
//   } else return (tip = bill * (20 / 100));
// };
// console.log(tipCalc(200));

tipCalc = (bill) => {
  bill <= 300 && bill >= 50
    ? (tip = bill * (15 / 100))
    : (tip = bill * (20 / 100));
  console.log(
    `The bill was ${bill}, the tip was ${tip}, and the total value ${
      bill + tip
    }`
  );
};
tipCalc(100);
