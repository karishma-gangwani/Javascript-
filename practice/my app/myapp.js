// 1.
function makeCoffee(sugar, milk) {
  let instructions = "Boil water";
  instructions += " pour into a cup,";
  instructions += " add coffee granules,";
  instructions += " add " + sugar + " spoons of sugar";
  instructions += " and add " + milk + "% milk.";
  return instructions;
}
console.log(makeCoffee(2, 20));

// 2.
let car = {
  make: "volvo",
  speed: 160,
  engine: {
    size: 2.0,
    make: "bmw",
    fuel: "gasoline",
    pistons: [{ maker: "BMW" }, {}],
  },
};
console.log(car);

// 3.
// curly braces are used to create or define objects while square brackets are used for defining arays.

let array1 = [
  "string",
  100,
  ["embed", 200],
  { car: "ford" },
  function () {
    return "drive";
  },
];

// 4.
function name(fullname) {
  return fullname.firstname + " " + fullname.lastname;
}
console.log(name({ firstname: "Harry", lastname: "Tuttle" }));

// 5. scope is within the curly braces. to access an object within multiple scopes one has to go object by object

let engine = {
  maker: "ford",
  headGasket: {
    pots: ["piston1", "piston2"],
  },
};

// 6. callable objects go onto the execution stack.
// the variables or symbols go onto the symbols stack.
// after the variables are called in the function they move to the GC
// functions are callable objects and callable objects have scope in which you can have embedded objects

// 7. This points to the window object.
// if this keyword is used in an object property or an element within an array it always points to a window object
let object = {
  prop: this,
  method: function () {
    return this;
  },
};

// 8.
let array2 = [
  this,
  function () {
    return this;
  },
];
function global() {
  return this;
}
global.call(object);

// 9.
// capitalize the first letter of a constructor function.
// The constructor method is a special method of a class for creating and initializing an object instance of that class.
// instance is nothing but a copy
function Apple(color, weight) {
  this.color = color;
  this.weight = weight;
}

Apple.prototype = {
  eat: function () {
    return this;
  },
  throw: function () {
    return "throw the apple";
  },
};
// with constructor functions one uses the keyword 'new'
// we want to assign a new object to the Apple execution context
let apple1 = new Apple("red", 200);
let apple2 = new Apple("blue", 20);
// this contains an empty object that is accessing a new object.
console.log(apple1.eat());
// always call your function in an assignment to an object. That way you can find your newly created object.

// 10. Prototype object
// We don't need the common actions/verbs for the instance objects with that follow the same blueprint. That will waste memory.
// We can use a prototype object. that has the functions that is common to all those objects that follow the same blueprint
// the prototype object can just take one memory slot. jquery uses these sharable objects with properties that can be accessed by multiple instances.
// only change the properties of the prototype object in the inital object. not at the instance level

// 11. This
//accesses the first function
// it goes back up the chain to the initial constructor callable object that invoked it.

// 12. Comparison operators == will always return a boolean value
// never use Nan in comparison operators.

// 13. IF statements
//  if (condition) {

// }
let carsLeft = 0;
let carsRight = 0;
let greenMan = "no";

if (greenMan === "yes") {
  console.log("cross the road");
} else if (carsLeft === 0 && carsRight === 0) {
  console.log("All clear! Cross the road!");
}

// 14. For loops
// for multiple conditions
