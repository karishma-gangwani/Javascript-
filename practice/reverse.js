function Reverse(x) {
  for (let i = x.length - 1; i >= 0; i--) {
    console.log(x[i]);
  }
}
Reverse([1, 3, 4, 5]);
console.log("");
// for-in loop: memory pointer pointing to a memory access
for (let index in Reverse([1, 2, 3, 5])) {
  console.log(x[index]);
}

for (let i in Reverse("Banana")) {
  console.log(x[i]);
}
