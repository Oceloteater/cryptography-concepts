const { generateKeyPairSync } = require('crypto');

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048, // length of the key in bits
    publicKeyEncoding: {
        type: 'spki', // recommended by nodejs docs
        format: 'pem' // base64 format
    },
    privateKeyEncoding: {
        type: 'pkcs8', // also recommended by nodejs docs
        format: 'pem' // base64 format
    }
});

console.log(privateKey, publicKey);

module.exports = {
    privateKey, publicKey
}