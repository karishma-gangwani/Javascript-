let deepEqual = (x, y) => {
  if (x === y) {
    return true;
  }
  if (x == null || y == null || typeof x != "object" || typeof y != "object") {
    return false;
  }
  if (Object.keys(x) != Object.keys(y).length) {
    return false;
  }
  for (let key of Object.keys(x)) {
    if (!Object.keys(y).includes(key) || !deepEqual(x[key], y[key])) {
      return false;
    }
  }
};

let x = { here: { is: "an" }, object: 2 };
let y = 2;

console.log(deepEqual(x, y));
