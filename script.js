const name = "WinWut";
const age = 19;
const isStudent = true;

console.log(`Hi, I'm ${name}, ${age} years old.`);

const sensorName = "EC";
const ecUnit = "µS/cm";
const ecValue = 100;
console.log(`${sensorName}: ${ecValue} ${ecUnit}`);

const ecMin = 1200;
const ecMax = 2000;
const inRange = ecValue >= ecMin && ecValue <= ecMax;
console.log(inRange);

console.log(typeof age);
console.log(typeof name);
console.log(typeof inRange);
let x;
console.log(typeof x);

console.log(0.1 + 0.2);
console.log("5" + 3);
console.log("5" - 3);
console.log(5 === "5");
console.log(Boolean("0"));