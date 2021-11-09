const { publicEncrypt, privateDecrypt } = require('crypto');
const { privateKey, publicKey } = require('./keypair');

const message = 'The british are coming!';

const encryptedData = publicEncrypt(publicKey, Buffer.from(message));

console.log(encryptedData.toString('hex'));

const decryptedData = privateDecrypt(privateKey, encryptedData);

console.log(decryptedData.toString('utf8'));