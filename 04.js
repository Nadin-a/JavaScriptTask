const ARRAY = [0, 1, 0, 3, 4, 8, 0];
let even = [], odd = [];
ARRAY.forEach(x => x % 2 === 0 ? even.push(x) : odd.push(x));
console.log(even, odd);
