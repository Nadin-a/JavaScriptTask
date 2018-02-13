const heights = [168, 186, 161, 176, 174]
const names = ['Membran', 'Fisher', 'Warden', 'Smith', 'Lerman'];
console.log(names[heights.indexOf(Math.max(...heights))]);
