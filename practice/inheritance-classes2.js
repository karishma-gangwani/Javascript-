const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const car1 = new car("BMW", 120);

// or use object.create

// const car1 = Object.create(car);

const car2 = new car("Mercedes", 95);

car1.speedUS = 100;

// to create a new method in the car object prototype.

car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is accelerating at ${this.speed} km/hr`);
};

car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/hr`);
};

// console.log(car1);
// console.log(car2);

car1.accelerate();
car1.brake();

console.log(car1.__proto__ === car.prototype);
console.log(car2.__proto__ === car.prototype);

const auto = function (make, speed, color) {
  car.call(this, make, speed);
  this.color = color;
};

// to make a new object and copy it to car.prototype.
auto.prototype = Object.create(car.prototype);

auto.prototype.wheelSize = function () {
  if (this.speed > 50)
    console.log(
      `${this.make} auto has a bigger wheel size with speed ${this.speed} km/h`
    );
  else
    console.log(
      `${this.make} auto has a smaller wheel size with speed ${this.speed} km/h`
    );
};

const auto1 = new auto("Volkswagen", 30, "black");
auto1.accelerate();
auto1.brake();
