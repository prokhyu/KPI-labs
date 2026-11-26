'use strict';

const checkFunctions = fns => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError('All arguments must be functions');
    }
  }
};

const pipe = (...fns) => {
  checkFunctions(fns);

  return x => {
    let result = x;

    for (const fn of fns) {
      result = fn(result);
    }

    return result;
  };
};

const inc = x => x + 1;
const twice = x => x * 2;
const cube = x => x ** 3;

console.log('Task 1:');

const f1 = pipe(inc, twice, cube);
console.log(f1(5));

const f2 = pipe(inc, inc);
console.log(f2(7));

try {
  const f3 = pipe(inc, 7, cube);
  console.log(f3(5));
} catch (error) {
  console.log('Error:', error.message);
}


const compose = (...fns) => {
  checkFunctions(fns);

  const listeners = [];

  const composed = x => {
    let result = x;

    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        result = fns[i](result);
      }

      return result;
    } catch (error) {
      for (const listener of listeners) {
        try {
          listener(error);
        } catch {
          // помилка в обробнику не повинна ламати інші обробники
        }
      }

      return undefined;
    }
  };

  composed.on = (event, callback) => {
    if (event === 'error' && typeof callback === 'function') {
      listeners.push(callback);
    }

    return composed;
  };

  return composed;
};

console.log('Task 2:');

const f4 = compose(inc, twice, cube);

console.log(f4(2));

const divide = x => {
  if (x === 0) {
    throw new Error('Division by zero');
  }

  return 10 / x;
};

const f5 = compose(inc, divide);

f5.on('error', error => {
  console.log('Caught error:', error.message);
});

console.log(f5(2));
console.log(f5(0));

f5.on('error', error => {
  console.log('Second handler:', error.message);
});

console.log(f5(0)); 