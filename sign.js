const { createSign, createVerify } = require('crypto');
const { privateKey, publicKey } = require('./keypair');

const message = 'This is signed message';

// Sign
const signer = createSign('rsa-sha256');
signer.update(message);

const signature = signer.sign(privateKey, 'hex');
console.log(signature);

// Signature
const verifier = createVerify('rsa-sha256');
verifier.update(message);

const isVerified = verifier.verify(publicKey, signature, 'hex');
console.log(isVerified);