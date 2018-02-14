const INIT_ARR = [{a: 1, b: 4}, {a: 33, b: -8}, {a: -22, b: 23}, {a: -2.01, b: 77}, {a: 15, b: 13}];

// 1
const positive = item => item > 0 ? item : null;
const hashes = hash => Object.values(hash).map(positive);
console.log(INIT_ARR.map(hashes).join());

// 2
console.log(INIT_ARR.find(hash => hash.a < 0));

// 3
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const firstA = hash => hash.a;
const firstB = hash => hash.b;

let new_hash = {
  a: INIT_ARR.map(firstA).reduce(reducer),
  b: INIT_ARR.map(firstB).reduce(reducer)
};

console.log(new_hash);

//4

console.log(INIT_ARR.map(firstB).sort());

//5

const isEven = hash => hash.b % 2 === 0;
console.log(INIT_ARR.filter(isEven));

//6

const abNegative = hash => hash.a < 0 && hash.b < 0;
console.log(INIT_ARR.some(abNegative));
