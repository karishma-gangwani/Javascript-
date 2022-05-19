function range(start, end, step) {
  let x = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      x.push(i);
    }
  } else if (step < 0) {
    for (let i = start; i >= end; i += step) {
      x.push(i);
    }
  } else {
    for (let i = start; i <= end; i++) {
      x.push(i);
    }
  }
  return x;
}
console.log(range(10, 2, -2));
