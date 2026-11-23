'use strict';

// Task 1 - Sum using for

function sum(...args) {
  let result = 0;

  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }

  return result;
}

console.log('Task 1:');
console.log(sum(1, 2, 3));
console.log(sum(0));
console.log(sum());
console.log(sum(1, -1, 1));
console.log(sum(10, -1, -1, -1));


// Task 2 - Sum using for...of

function sumForOf(...args) {
  let result = 0;

  for (const number of args) {
    result += number;
  }

  return result;
}

console.log('Task 2:');
console.log(sumForOf(1, 2, 3));
console.log(sumForOf(0));
console.log(sumForOf());
console.log(sumForOf(1, -1, 1));
console.log(sumForOf(10, -1, -1, -1));


// Task 3 - Sum using while

function sumWhile(...args) {
  let result = 0;
  let i = 0;

  while (i < args.length) {
    result += args[i];
    i++;
  }

  return result;
}

console.log('Task 3:');
console.log(sumWhile(1, 2, 3));
console.log(sumWhile(0));
console.log(sumWhile());
console.log(sumWhile(1, -1, 1));
console.log(sumWhile(10, -1, -1, -1));


// Task 4 - Sum using do...while

function sumDoWhile(...args) {
  let result = 0;
  let i = 0;

  if (args.length === 0) {
    return 0;
  }

  do {
    result += args[i];
    i++;
  } while (i < args.length);

  return result;
}

console.log('Task 4:');
console.log(sumDoWhile(1, 2, 3));
console.log(sumDoWhile(0));
console.log(sumDoWhile());
console.log(sumDoWhile(1, -1, 1));
console.log(sumDoWhile(10, -1, -1, -1));


// Task 5 - Sum using reduce

function sumReduce(...args) {
  return args.reduce((result, number) => result + number, 0);
}

console.log('Task 5:');
console.log(sumReduce(1, 2, 3));
console.log(sumReduce(0));
console.log(sumReduce());
console.log(sumReduce(1, -1, 1));
console.log(sumReduce(10, -1, -1, -1));


// Task 6 - Maximum element in a two-dimensional array

function max(matrix) {
  let result = -Infinity;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > result) {
        result = matrix[i][j];
      }
    }
  }

  return result;
}

console.log('Task 6:');

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);

console.log(max([[10, 20], [30, 40]]));
console.log(max([[-5, -2], [-10, -1]]));


// Task 7 - Calculate ages using for...in

function ages(persons) {
  const result = {};

  for (const name in persons) {
    const person = persons[name];
    result[name] = person.died - person.born;
  }

  return result;
}

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

console.log('Task 7:');
console.log(ages(persons));