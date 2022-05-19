function BMI(mass, height) {
  let BMI = mass / (height * height);
  return BMI;
}
const MarkBMI = BMI(78, 1.69);
const JohnBMI = BMI(92, 1.76);

if (MarkBMI > JohnBMI) {
  console.log(`Mark's BMI ${MarkBMI} is higher than John's ${JohnBMI}!`);
} else {
  console.log(`John's BMI ${JohnBMI} is higher than Mark's ${MarkBMI}!`);
}
