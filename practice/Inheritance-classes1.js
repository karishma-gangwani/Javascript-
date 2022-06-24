// 1. Classes are not hoisted but function declarations are.
// 2. they are first class citizens. That means they can be written in functions and also returned from functions.
// 3. the body of a class is always executed in a strict mode.

class car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  // to create a new method in the car object prototype.
  // methods in a class automatically get added onto the .prototype property.
  // this is part of the prototype not the object itself.

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is accelerating at ${this.speed} km/hr`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/hr`);
  }
  get speedUS() {
    return `${this.make} is going at ${this.speed / 1.6} mi/h`;
  }
  set speedUS(speed) {
    return `${this.make} is going at ${(this.speed = speed * 1.6)} km/h`;
  }
}

const car1 = new car("BMW", 120);
const car2 = new car("Mercedes", 95);

car1.speedUS = 100;

// or use object.create

// const car1 = Object.create(car);

car1.make = "BMW";
car1.speed = 120;

// console.log(car1);
// console.log(car2);

// call the method on the object.

// car1.accelerate();
// car1.brake();
// console.log(car1.speedUS);
// console.log(car1);

// Inheriting Child class.

class auto extends car {
  constructor(make, speed, color) {
    // Always should be first. this super call.
    super(make, speed);
    this.color = color;
  }
  wheelSize() {
    if (this.speed > 50)
      console.log(
        `${this.make} auto has a bigger wheel size with speed ${this.speed} km/h`
      );
    else
      console.log(
        `${this.make} auto has a smaller wheel size with speed ${this.speed} km/h`
      );
  }
}

const auto1 = new auto("Volkswagen", 30, "black");
console.log(auto1);
auto1.wheelSize();
auto1.accelerate();
auto1.brake();
console.log(auto1.speedUS);

class EV extends car {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }
  chargeBattery(chargeTo) {
    this.charge = chargeTo;
  }
  _accelerate() {
    this.speed += 20;
    this.charge -= 1;
    console.log(
      `${this.make} going at ${this.speed} km/h with a charge of ${this.charge}`
    );
  }
  // Private methods - not available in google chrome
  #approvedLoan(val) {
    return true;
  }
}

const EV1 = new EV("Tesla", 120, 23);

EV1.brake();
EV1.chargeBattery(90);
EV1._accelerate();

// a child class method can override the method created by the Parent class. This is called polymorphism.
// if there was no accelerate method in the child class then it would pick the parent class method.
// _propertyName is encapsulating and provatising the value or method enclosing the property.

// public field (instances)
locale = navigator.language;

// Private fields use #
// eg., #accelerate()
