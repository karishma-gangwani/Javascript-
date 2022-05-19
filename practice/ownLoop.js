function loop(value, test, update, body) {
  for (i = value; test(i); i = update(i)) {
    body(i);
  }
}

// function loop(value, test, update, body) {
//   if (test(value)) body(value);
//   else return; //prevents stack overflow
//   return loop(update(value), test, update, body);
// }

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
