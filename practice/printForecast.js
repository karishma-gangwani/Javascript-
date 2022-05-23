const Data1 = [17, 21, 23];
const Data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  arr.forEach((element, index) =>
    console.log(`${element + "\u00B0 Celsius"} in ${index + 1} day/s`)
  );
};
printForecast(Data1);
