'use strict';


function removeElement(array, item) {
  const index = array.indexOf(item);

  if (index !== -1) {
    array.splice(index, 1);
  }
}

console.log('Task 1:');

const numbers = [1, 2, 3, 4, 5, 6, 7];

removeElement(numbers, 5);

console.log(numbers);

const cities = ['Kiev', 'Beijing', 'Lima', 'Saratov'];

removeElement(cities, 'Lima');
removeElement(cities, 'Berlin');

console.log(cities);


function removeElements(array, ...items) {
  for (const item of items) {
    let index = array.indexOf(item);

    while (index !== -1) {
      array.splice(index, 1);
      index = array.indexOf(item);
    }
  }
}

console.log('Task 2:');

const numbers2 = [1, 2, 3, 4, 5, 6, 7];

removeElements(numbers2, 5, 1, 6);

console.log(numbers2);

const cities2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];

removeElements(cities2, 'Lima', 'Berlin', 'Kiev');

console.log(cities2);


function unique(array) {
  const result = [];

  for (const item of array) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

console.log('Task 3:');

const numbers3 = [1, 2, 3, 2, 1, 4, 5, 4];
console.log(unique(numbers3));

const cities3 = ['Kiev', 'Beijing', 'Kiev', 'Lima', 'Beijing'];
console.log(unique(cities3));


function difference(array1, array2) {
  const result = [];

  for (const item of array1) {
    if (!array2.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

console.log('Task 4:');

const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 4, 6];

console.log(difference(array1, array2));

const cities4 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
const cities5 = ['Beijing', 'Berlin', 'Saratov'];

console.log(difference(cities4, cities5));