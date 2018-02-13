const NUM = 777997;

let arr = NUM.toString().split('');

let max = Math.max(...arr);
const findMax = num => parseInt(num) === max;
console.log(arr.filter(findMax).length);
