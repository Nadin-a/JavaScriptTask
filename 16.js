const mHash = [
  { name: 'Membran', height: 168 },
  { name: 'Fisher', height: 186 },
  { name: 'Warden', height: 161 },
  { name: 'Smith', height: 176 },
  { name: 'Lerman', height: 174 }
];

let max = Math.max(...mHash.map(elem => { return elem['height'] }));
let obj = mHash.filter(elem => elem.height === max)[0];
console.log(obj.name);
