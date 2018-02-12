var mArray = [0, 1, 0, 3, 4, 8, 0];
var even = [], odd = [];
for(var x in mArray){
  x % 2 === 0 ? even.push(x) : odd.push(x);
}
console.log(even, odd);