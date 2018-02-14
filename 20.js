const HASH = {
  a: 12,
  b: 74.9,
  c: [23, 44, 66, -8, 124],
  d: "Some String",
  z: {ca: "Inherit hash", cb: 112}
};

let HASH1 = Object.assign({}, HASH);

for (let prop in HASH1) {
  if (typeof HASH1[prop] === "number" || typeof HASH1[prop] === "string") {
    delete HASH1[prop];
  }
}
console.log(HASH1);

let HASH2 = Object.assign({}, HASH);

const newValues = Object.values(HASH2).reverse();

let i = 0;
for (let prop in HASH2) {
  HASH2[prop] = newValues[i];
  i += 1;
}

console.log(HASH2);