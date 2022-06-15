document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const string = document.querySelector("textarea").value;
  let newString = [];
  if (string.includes("_")) {
    const splitString = string.split("_");
    for (element of splitString) {
      newString.push(element[0].toUpperCase() + element.slice(1));
    }
    console.log(newString[0].toLowerCase() + newString.slice(1).join(""));
  }
});

// const camelCase = function (string) {
//   let newString = [];
//   if (string.includes("_")) {
//     const splitString = string.split("_");
//     for (element of splitString) {
//       newString.push(element[0].toUpperCase() + element.slice(1));
//     }
//     return newString[0].toLowerCase() + newString.slice(1).join("");
//   }
// };
// console.log(camelCase("a_bhvvc_ygfh"));
// console.log(camelCase("underscore_case"));
// console.log(camelCase("first_name"));
// console.log(camelCase("Some_Variable"));
// console.log(camelCase("calculate_AGE"));
// console.log(camelCase("delayed_departure"));
