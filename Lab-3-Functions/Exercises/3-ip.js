'use strict';

const ipToInt = (ip = '127.0.0.1') => {
 const parts = ip.split('.').map(Number);
return parts.reduce((result, part) => (result << 8) + part, 0);
};
module.exports = { ipToInt };
