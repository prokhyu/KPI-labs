'use strict';

const generateKey = (length, possible) => {
  let key = '';

for (let i = 0; i < length; i++) {
 const randomValue = Math.random();
const index = Math.floor(randomValue * possible.length);
  key += possible[index];
}
return key;
};

module.exports = { generateKey };
