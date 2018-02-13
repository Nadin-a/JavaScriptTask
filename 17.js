const arr = [3, -6, 3, -5, 6, -4];
const alternation = (item, index) =>{
  return item > 0 && arr[index + 1] < 0 || item < 0 && arr[index + 1] > 0
};
arr.slice(0,-1).map(alternation).includes(false)? console.log('Не чередуются') : console.log('Чередуются');
