function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    console.log(item);
    let name = groupName(item); //true
    let known = counts.findIndex((c) => c.name == name); //-1
    if (known == -1) {
      counts.push({ name, count: 1 });
      //[{name: false, count:2}]
      //[{name: false, count:2}, {name: true, count:1}]
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

console.log(countBy([1, 2, 3, 4, 5], (n) => n > 2));
