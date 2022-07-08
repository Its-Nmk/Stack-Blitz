// run `node index.js` in the terminal

// console.log(`Hello Node.js v${process.versions.node}!`);

const bcrypt = require('bcrypt');

const pass = 'Nilesh';

const hashed = bcrypt.hash(pass, 8);

console.log(pass, hashed);
