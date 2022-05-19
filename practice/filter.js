filter = (array, test) => {
  let passed = [];
  array.forEach((element) => {
    if (element === test) {
      passed.push(element);
    }
  });
  return passed;
};

console.log(filter([1, 5, 4, 2, 7], 4));
