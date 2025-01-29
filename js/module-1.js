// Boolean: true, false(null, undefined, NaN, 0, "", false)
// String - str
// Number: integer, float, NaN
// Object (array, function)
// undefined
// null
// BigInt
// Symbol

const airplane = {
  weight: 1000,
  length: 45,
  color: "white",
  isFly: false,
  crew: null,
};

const crew = {
  copilot: "mango",
  pilot: "polly",
  cabinCrew: ["neptun", "saturn"],
};

airplane.crew = crew;
airplane.isFly = true;

console.log(airplane);

const num1 = 45;
const str1 = num1.toString();

const str2 = String(num1);

const str3 = `${num1}`;
console.log(typeof str1);
console.log(str2);
console.log(str3);
console.log("polly" + (15 + 45));
console.log(15 - false);
console.log(15 - true);
console.log(3 * null);
console.log(Number(undefined));
console.log(Boolean(15));
