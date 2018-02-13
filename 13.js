const ARR = [3, 7, 9, -65, 4, 43, -7, 9, 4, 3, 2, 1];
const condition = item => ARR[0] < item && item < ARR[-1];
console.log(ARR.filter(condition) || []);
