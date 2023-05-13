let name = {
  firstName: 'dhilip',
  lastName: 'kumar',
};

function printValues(city, state) {
  console.log(this.firstName, this.lastName, city, state);
}

printMethod = printValues.bind(name, 'chengalpattu');
printMethod('tamilnadu');

// A polyfill is a piece of code (usually JavaScript on the Web)
// used to provide modern functionality on older browsers that do not
//  natively support it.
// for example : if browser does not support bind method , we can have own bind implementation

Function.prototype.mybind = function (...args) {
  let obj = this;
  params1 = args.slice(1);
  return function (...args1) {
    obj.apply(args[0], [...params1, ...args1]);
  };
};

printMethod = printValues.mybind(name, 'chengapattu');
printMethod('tamilnadu');
