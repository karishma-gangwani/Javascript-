function removeNum(x, num) {
  for (let i = 0; i < x.length; i++) {
    if (num == x[i]) {
      x.splice(i, 1);
    }
  }
  //output is only needed once that is why console.log should be outside the for loop
  console.log(x);
}
removeNum([12, 3, 5, 3], 3);
