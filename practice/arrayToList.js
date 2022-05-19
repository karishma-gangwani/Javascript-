function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    //   for (let i = 0; i < array.length; i++) {
    list = { value: array[i], rest: list };
    //   }
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let i = list; i; i = i.rest) {
    console.log(i);
    array.push(i.value);
  }
  return array;
}

// console.log(arrayToList([78, 89, 99]));
// console.log(listToArray(arrayToList([10, 20, 30])));

// let nth = (list, n) => {
//   return listToArray(list)[n];
// };
// console.log(nth(arrayToList([10, 20, 30]), 1));

// recursive version
let nth = (list, n) => {
  if (n === 0) {
    return list.value;
  } else return nth(list.rest, n - 1);
};
console.log(nth(arrayToList([10, 20, 30]), 2));
