const R = 2.645;
const ARR = [
  2.646,
  4.23423,
  7.8678,
  7.8679,
  0.7867,
  43.21312,
  1,
  76.54354,
  0.6546,
  3.7,
  -16.2,
  3.00001,
  6.4234,
  98.3,
  18.999999
];

let res = 0;
let min = Math.abs(R);
ARR.forEach(num => {
  if (Math.abs(R - num) < min) {
    min = Math.abs(R - num);
    res = num;
  }
});

console.log(res);
