const ARRAY = [2, -500, 7, 6, 3, 125, 9];
const MIN_INDEX = ARRAY.indexOf(Math.min(...ARRAY));
const MAX_INDEX = ARRAY.indexOf(Math.max(...ARRAY));
let sub_arr = [];
if (MIN_INDEX > MAX_INDEX) {
  sub_arr = ARRAY.slice((MAX_INDEX + 1), MIN_INDEX);
}
else {
  sub_arr = ARRAY.slice((MIN_INDEX + 1), MAX_INDEX);
}
console.log(sub_arr.reverse());
