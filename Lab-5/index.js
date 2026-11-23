'use strict';

function seq(...args) {
  const functions = [...args];

  function chain(value) {
    if (typeof value === 'number') {
      let result = value;

      for (let i = functions.length - 1; i >= 0; i--) {
        result = functions[i](result);
      }

      return result;
    }

    if (typeof value === 'function') {
      functions.push(value);
      return chain;
    }
  }

  return chain;
}

console.log('Task 1:');

console.log(
  seq(x => x + 7)
     (x => x * 2)(5)
);

console.log(
  seq(x => x * 2)
     (x => x + 7)(5)
);

console.log(
  seq(x => x + 1)
     (x => x * 2)
     (x => x / 3)
     (x => x - 4)(7)
);


function array() {
  const data = [];

  function access(index) {
    return data[index];
  }

  access.push = function(value) {
    data.push(value);
  };

  access.pop = function() {
    return data.pop();
  };

  return access;
}

console.log('Task 2:');

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());