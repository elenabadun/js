// == ===
// != !==
// <
// >
// >=
// <=

console.log(1 == true);
console.log("Mango" < "mango");
console.log("mango" > "man");

if (true) {
}
if (false) {
} else {
}
if (false) {
} else if (true) {
} else {
}

let isCold;
if (10 < 0) {
  isCold = "cold";
} else {
  isCold = "warm";
}
console.log(isCold);

let temp = "12";
if (temp <= 3) {
  console.log("cold");
} else if (temp <= 7) {
  console.log("warmer");
} else if (temp <= 12) {
  console.log("warm");
} else {
  console.log("hot");
}

// switch
switch (temp) {
  case 3:
  case 4:
  case 5:
  case 6:
    console.log("cold");
    break;
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
    console.log("warmer");
    break;
  case 12: // temp === 12
    console.log("warm");
    break;
  default:
    console.log("hot");
}
