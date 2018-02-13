const NUM = 777997;

let arr = NUM.toString().split('');

const MAX = Math.max(...arr);
const findMax = num => parseInt(num) === MAX;
console.log(arr.filter(findMax).length);
