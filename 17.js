const ARR = [3, -6, 3, -5, 6, -4];
const alternation = (item, index) =>{
  return item > 0 && ARR[index + 1] < 0 || item < 0 && ARR[index + 1] > 0
};
ARR.slice(0,-1).map(alternation).includes(false)? console.log('Не чередуются') : console.log('Чередуются');
