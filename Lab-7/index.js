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
const unique = array => [...new Set(array)];

console.log('Task 3:');

console.log(unique([2, 1, 1, 3, 2]));                  
console.log(unique(['top', 'bottom', 'top', 'left'])); 

const difference = (array1, array2) => {
  const exclude = new Set(array2);
  return array1.filter(item => !exclude.has(item));
};

console.log('Task 4:');

console.log(difference([7, -2, 10, 5, 0], [0, 10]));                     
console.log(difference(['Beijing', 'Kiev'], ['Kiev', 'London', 'Baghdad'])); 
