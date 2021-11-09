const { createHash } = require('crypto');

console.log('-- HASH --');

function hash(input) {
    return createHash('sha256').update(input).digest('hex');
}

const password = 'supersecretpassword';
const hash1 = hash(password);
const hash2 = hash(password);

console.log(hash1);
console.log(hash2);

console.log(hash1 === hash2);


