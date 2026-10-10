'use strict';

const methods = (iface) => {
const result =  Array.from([]);
for (const key in iface) {
  if (typeof iface[key] === 'function') {
    result.push([key, iface[key].length]);
  }
}

return result;
};

module.exports = { methods };
