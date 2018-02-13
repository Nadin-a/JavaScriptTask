const HASH = {
  a: 12,
    b: 74.9,
  c: [23, 44, 66, -8, 124],
  d: "Some String",
  z: { ca: "Inherit hash", cb: 112 }
};

for (let key in HASH) {
  if (typeof HASH[key] === "number" || typeof HASH[key] === "string"){
    delete HASH[key];
  }
}
console.log(HASH);

const HASH2 = {
  a: 12,
  b: 74.9,
  c: [23, 44, 66, -8, 124],
  d: "Some String",
  z: { ca: "Inherit hash", cb: 112 }
};


const newValues = Object.values(HASH2).reverse();

let i = 0;
for (let key in HASH2) {
 HASH2[key] = newValues[i];
 i++;
}

console.log(HASH2);