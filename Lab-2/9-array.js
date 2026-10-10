'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
  { name: 'Yuliia', phone: '+380687160113' },
  { name: 'mom', phone: '+380677609343' },
  { name: 'dad', phone: '+380972385589' }
];

const findPhoneByName = (name) => {
  for (const r of phonebook) {
    if (r.name === name) return r.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
