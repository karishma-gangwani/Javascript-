size = 10;
string = "";
for (let i = 0; i <= size; i++) {
  let string = "";
  for (let k = size; k >= i; k--) {
    string += " ";
  }
  for (let j = 0; j < i; j++) {
    string += " #";
  }
  console.log(string);
}
