// 1. special numbers -
// Infinity
// and -infinity

// 2. Newlines (characters that you get when you press enter)
// can be included without escaping only when the string is quoted with back-ticks (`)
// When a backslash \ is found inside a quoted text it indicated that the character after it has a special meaning. This is called escaping the character.
// a quote that is preceded by a backslash will not end the string but be a part if it.

// 3. Don't need to define a function in ES6. can directly use the name of the function and pass the argument/value in it.
// Also don't need to define key, value pairs for object literals in ES6.

// 4. The elements in an array are stored as the array's properties, using numbers as property names.
// Property names are strings. so if you want to access the property named by the value held in the binding i, you say value[i].
// for example, to access the property named 2 or John we say value[2] or value["John"].

// 5. toUpperCase and toLowerCase. string property.
// properties that contain functions are generally called methods of the value they belong to, as in "toUpperCase is a method of a string"

// 6. Values of the type object are arbitrary collections of properties.

// 7. instead of if-else use ternary operator

// 8. instead of for loop use foreach or reduce

// 9. instead of keyword function use arrow-functions to create functions but it cannot use the this keyword so very selective use.
// function expression is the best way to write a function.

// 10. Map -
// use to create a new array and filter is used for filtering through

// 11. to check type of object.
console.log(typeof 'object/variable')

// 12. think about functions within functions. complexity? you don't want to change the function in multiple places. writing a smarter and more efficient code. think what if?

// 13. for an if statement - console.log should come above the return statement otherwise it will not get printed.

// 14. use the /this method. use it to create new properties.
// this refers to the object itself. so this can be used as the object itself to call properties or methods.

// 15. always try to compute the values.

// 16. use .push to add objects at the end of the array and not unshift/shift which does it at the beginning of the array.

// 17. continue and break - keywords

// 18. use Math properties.

// 19. prompt function always returns a string.

// 20. console.table - to display the object table

// 21. Debugging - you can type debugger; in your program to open the debugger in the console.
// debugging is used to check the working and errors in your code.

// 22. When JS interacts with the webpage that is called as DOM manipulation. To select an element use document.queryselector()

// 23. DOM tree - parent, child, sibling element. For each element there is an element node. 

// 24. DOM is not part of JS. JS is just a dialect of the ECMA script. DOM and DOM methods are part of web API. Web API's are libraries. 

// 25. Cmd + control + space = emojis 😁

// 26. Option + up = exchange lines

// 27. Do not copy objects as assigned variables. Use function object.assign({}, object-that-is-being-copied). But this makes a shallow copy. Not a deep clone.

// 28. Spread operator works on all iterables including arrays.

// 29. It is a spread operator coz its on the right side of the = assignment operator and its the rest operator if it is on the left of =. 

// 30. Spread operator is used to unpack while the rest operator is used to compress. 

// 31. Short circuit using || && function. || operator returns truth values first and && returns false values first.

// 32. Nullish coalescing operator. ?? returns left side values. But if there is null or undefined then it will return the other value. Use it for assignment '??='

// 33. The OR assignment operator assigns a value to a variable if the current value is falsy. For example,

Const rest = {
Name: Capri,
}

Rest.numGuests ||= 10;

// So if there is no parameter as numGuests then the OR operator will assign 10 to the parameter. 

// 34. Restructuring arrays and objects. 

// 35. Function methods within an object can be written without using its keyword. That is inside an object. 

// 36. Optional chaining. Use a question mark before a property is called. 

console.log(restaurant.openingHours.mon?.open) --> if mon exists in openingHours then open the property and log it to the console. 

// 37. Looping over keys and values. 
// Use .entries() method to iterate over index, element in arrays. 

const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'


// 38. Sets are used for unique values. You can create an array using sets and the spread operator and convert duplicates into unique values.

Const arr = [1,2,3,1,2,1];
Const newarr = [...newset(arr)];

//output: [1,2,3]

// 39. Convert object to Map:

Const mapName = new Map(object.entries(object));

// 40. Convert mãp to array:

Const arr = [...mapname];

// 41. .indexOf method can be used to get the index of a number, string, entire word. 
// .slice method(initial, final value) - initial value is included but not end value.
// .lastIndexOf method

// 42. Extract using slice. 

Object.slice(-1)
Object.lastIndexOf.slice(-1)

// 43. All string returns a primitive. So when a method is called on a string, JS converts a string into a method object temporarily and then convert it back into a string. This process is called boxing. 

// 44. .replace method on strings:

String.replace(initial value, replaced value)

// 45. Use regular expressions in functions for global effects. 

Const announcement = 'All passengers come to boarding door 23. Boarding door 23!'
Console.log(announcement.replace(/door/g, 'gate'));

//output : All passengers come to boarding gate 23. Boarding gate 23!

// 46. .startsWith();

// 47. .join() - also works on arrays containing strings.

// 48. .split(' ') converts the object/string into an array.

// 49. .repeat() - will repeat the string or whatever argument you give. 

// 50. JS uses callbacks all the time. To make the code more readable and more usable. They allow to create abstraction.

// 51. JS functions work by pass-by-value. That is for any argument x inside a function they would copy the value from the reference without changing the reference itself. 

// 52. Callback functions - vital part of JS. Addeventlistener or foreach - they have no idea what to do themselves. But they are told to do a certain job such as on a click event a high order function will get executed. This means one function (in this case the addeventlistener click) is returning another function. It is calling back the other function specified above it. 

// 53. Functions have methods too. For example, .call(this/function/object, args)

// 54. Apply method does the same as call method but uses an array as an argument. So it will use the this-object as the first arg but the second one is the ...array

// 55. The bind method is a more important function method. It manually allows to set the this keyword.

// 56. .join method destructures an array into string objects.

// 57. empty nameless functions can be created in parentheses such that they only run once and cannot be called or executed afterwards.
// always wrap in parentheses. 

// 58. Closure has priority over the scope chain. 

// 59. Constructor functions are created using 'new' operator. 

//this is the blueprint.
class Person {
  constructor(firstName, birthYear) {
    this.firstName;
    this.birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}
//this is the new object. 
const jonas = new Person ('Jonas', 1991);

// 60. JS does not have the traditional OOP classes.

// 61. Never create a method inside a constructor function. 
// coz if we make 1000 new objects based on the constructor then that would make 1000 copies of the method inside that function which is a waste of memory space.

// 62. Create a prototype of the function and then use that to call on your object such that you don't have to copy paste the function several times.
// this is called prototypal inheritance.

const matilda = new Person ('Matilda', 2017);
const Jonas = new Person ('Jonas', 1975)


jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);

// the prototype is meant for use for the objects that are created on the Person constructor function.
// That does not mean that the prototype is of the constructor fn directly.
// protoype is just the property of the object. the blueprint is the constructor function. 
// so the prototype is the prototype of the Jonas object. 

console.log(Person.prototype.isPrototypeOf(jonas));
// true

console.log(Person.prototype.isPrototypeOf(Person));
// False

// think of it as .protoypeOfLinkedObjects - this is not the nomenclature though.

// 63. Functions are also objects so we can call methods on a function and they also have a prototype.

// 64. Classes are not hoisted but function declarations are.
// 65. they are first class citizens. That means they can be written in functions and also returned from functions.
// 66. the body of a class is always executed in a strict mode.

// 67.  methods in a class automatically get added onto the .prototype property.
// 68. these methods are part of the prototype not the object itself.

// 68. a child class method can override the method created by the Parent class. This is called polymorphism.
// 69. if there was no accelerate method in the child class then it would pick the parent class method.
// 70. _propertyName is encapsulating and provatising the value or method enclosing the property.

// 71. Encapsulation and data privacy
// public field (instances)
locale = navigator.language;

// 72. Private fields use #
// eg., #accelerate()

// 73. Writing classes with constructor functions. 