const arr = [3, 7, 9, -65, 4, 43, -7, 9, 4, 3, 2, 1];
const condition = item => arr[0] < item && item < arr[-1];
console.log(arr.filter(condition) || []);