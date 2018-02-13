const array = [2, -500, 7, 6, 3, 125, 9];
const min_index = array.indexOf(Math.min(...array));
const max_index = array.indexOf(Math.max(...array));
sub_arr = [];
if (min_index > max_index) {
  sub_arr = array.slice((max_index + 1), min_index);
}
else {
  sub_arr = array.slice((min_index + 1), max_index);
}
console.log(sub_arr.reverse());
