const compressArray = original => {
  let compressed = [];
  let copy = original.slice(0);
  for (let i = 0; i < original.length; i++) {
    let myCount = 0;
    for (let w = 0; w < copy.length; w++) {
      if (original[i] === copy[w]) {
        myCount++;
        delete copy[w];
      }
    }
    if (myCount > 0) {
      let a = [];
      a.value = original[i] ;
      a.count = myCount;
      compressed.push(a);
    }
  }
  return compressed;
};


let words = 'this is my array this is array full of words'.split(' ');
compressArray(words);
console.log(compressArray(words));
