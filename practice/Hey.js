function repeatString(str, num) {
  let x = "";
  for (let i = 0; i < num; i++) {
    x += str;
  }
  console.log(x);
}
repeatString("hey", 3);
