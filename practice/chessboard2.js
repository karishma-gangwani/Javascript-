let unit = "# ";
size = 8;
for (let i = 0; i < size; i++) {
  let string = "";
  if (i % 2 == 0) string += " ";
  for (let j = 0; j < size / 2; j++) {
    string += unit;
  }
  console.log(string);
}
