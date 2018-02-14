let text = 'Дан текст. Заменить все , на . и наоборот..'.split('');

const replacing = ch => {
  if (ch === ',') {
    return '.';
  }
  else if (ch === '.') {
    return ',';
  }
  else {
    return ch;
  }
};

const NEW_STR = text.map(replacing).join('');
console.log(NEW_STR);
