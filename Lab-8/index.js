'use strict';

function iterate(object, callback) {
  for (const key in object) {
    if (Object.hasOwn(object, key)) {
      callback(key, object[key], object);
    }
  }
}

console.log('Task 1:');

const obj = {
  a: 1,
  b: 2,
  c: 3
};

iterate(obj, (key, value) => {
  console.log({ key, value });
});


function store(value) {
  return function() {
    return value;
  };
}

console.log('Task 2:');

const read = store(5);
const value = read();

console.log(value);


const PRIMITIVES = ['number', 'string', 'boolean', 'bigint', 'symbol', 'function'];

const checkType = (value, Type) => {
  const typeName = Type.name.toLowerCase();
  if (PRIMITIVES.includes(typeName)) return typeof value === typeName;
  return value instanceof Type;
};

function contract(fn, ...types) {
  const argumentTypes = types.slice(0, -1);
  const resultType = types[types.length - 1];

  return function(...args) {
    if (args.length !== argumentTypes.length) {
      throw new TypeError('Invalid number of arguments');
    }

    for (let i = 0; i < args.length; i++) {
      if (!checkType(args[i], argumentTypes[i])) {
        throw new TypeError(`Invalid type of argument ${i + 1}`);
      }
    }

    const result = fn(...args);

    if (!checkType(result, resultType)) {
      throw new TypeError('Invalid result type');
    }

    return result;
  };
}

console.log('Task 3:');

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);

console.log(addNumbers(2, 3));


const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);

console.log(concatStrings('Hello ', 'world!'));


try {
  console.log(addNumbers(2, '3'));
} catch (error) {
  console.log('Error:', error.message);
}


const wrongResult = contract(
  (a, b) => String(a + b),
  Number,
  Number,
  Number
);

try {
  console.log(wrongResult(2, 3));
} catch (error) {
  console.log('Error:', error.message);
}


const first = contract(a => a[0], Array, Number);
console.log(first([1, 2, 3])); 