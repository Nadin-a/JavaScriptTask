const camelCase = str => str.replace(/\b\w/g, l => l.toUpperCase());
const underscore = str => str.toLowerCase();

const formalize = (str, type) => {
  let newStr = str.split(' ');
  switch (type) {
    case 'camel': {
      return newStr.map(camelCase).join(' ');
    }
    case 'underscore': {
      return newStr.map(underscore).join('_');
    }
    case 'css': {
      return newStr.map(underscore).join('-');
    }
  }
};

console.log(formalize('i like js', 'camel'));
console.log(formalize('i like js', 'underscore'));
console.log(formalize('i like js', 'css'));
