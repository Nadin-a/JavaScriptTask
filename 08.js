const ARR = [4, 6, 54, 42, -5, 10, 4, 4, 7, -6, 76, 3];
let count = 0;
ARR.forEach(num => {
  if (num % 2 !== 0) count++;
});
console.log(count);
