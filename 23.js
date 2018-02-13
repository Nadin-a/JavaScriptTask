camelize = function camelize(str) {
  return str.replace(/\W+(.)/g, function(match, chr)
  {
    return chr.toUpperCase();
  });
};

const camelCase = str => {
  return str.replace(/\b\w/g, l => l.toUpperCase())
};
const underscore = str => {
  return str.toLowerCase();
};


const formalize = (str, type) =>{
  let nstr = str.split(' ');
  switch(type){
    case 'camel':{
      return nstr.map(camelCase).join(' ');
    }
    case 'underscore':{
      return nstr.map(underscore).join('_');
    }
    case 'css':{
      return nstr.map(underscore).join('-');
    }
  }
};

console.log(formalize('i like js', 'camel'));
console.log(formalize('i like js', 'underscore'));
console.log(formalize('i like js', 'css'));
