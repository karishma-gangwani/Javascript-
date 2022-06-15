const Capitalize = function (name) {
  // split the name and create an array out of it.
  const nameSplit = name.split(" ");

  // create a new array for the new name.
  newName = [];

  // now you can loop over the array nameSplit.
  for (n of nameSplit) {
    newName.push(n[0].toUpperCase() + n.slice(1));
    // in this loop you can also use the .replace() function
  }
  return newName.join(" ");
  // when you use join, it converts the array back into a string primitive.
  // make sure to use the space in between quotation to join them without using the ','
};

console.log(Capitalize("karishma gangwani"));

console.log("Karishma Gangwani".padStart(25, "#").padEnd(40, "#"));
