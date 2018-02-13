const HEIGHTS = [168, 186, 161, 176, 174];
const NAMES = ['Membran', 'Fisher', 'Warden', 'Smith', 'Lerman'];
console.log(NAMES[HEIGHTS.indexOf(Math.max(...HEIGHTS))]);
