size = 5;

for(i=0;i<=size;i++) {
  var row = '';
  for(j=0;j<=size;j++) {
    row += i === j ? '1' : '0'
  }
  console.log(row);
}
