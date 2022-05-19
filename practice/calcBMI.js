const mark = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

mark.calcBMI() > john.calcBMI()
  ? console.log(
      `Mark's BMI ${mark.calcBMI()} is higher than John's ${john.calcBMI()}`
    )
  : mark.calcBMI() < john.calcBMI()
  ? console.log(
      `John's BMI ${john.calcBMI()} is higher than Mark's ${mark.calcBMI()}`
    )
  : null;

// so Kari what you did was
// you created a method calcBMI using an empty function
// and you used the functiion expression to calculate BMI and store it in a variable
// and you told that function to return the value of the computed function when the method is called.
// and you used the this keyword to call upon the objects properties and methods.
// You're amazing my love!!!!
