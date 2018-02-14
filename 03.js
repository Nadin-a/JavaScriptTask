const SIZE = 5;

for (let i = 0; i <= SIZE; i++) {
  let row = '';
  for (let j = 0; j <= SIZE; j++) {
    row += i === j ? '1' : '0'
  }
  console.log(row);
}

