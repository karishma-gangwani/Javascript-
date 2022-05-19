let string = "";
size = 8;
for (let i = 0; i < size; i++) {
  // let string = "";
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 == 0) string += " ";
    else string += "#";
  }
  string += "\n";
  // console.log(string);
}
console.log(string);
