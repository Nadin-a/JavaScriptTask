const array = [-7, -4, 2, 5, 3, -2, 7, 8, 9, 10, -9];
let new_arr = [];

for (let num of array) {
  new_arr.push(num);
  if (num > 0) new_arr.push(0);
}

console.log(new_arr);
