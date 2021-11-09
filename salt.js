const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

const users = [];

function signup(email, password) {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');
    
    const user = { email, password: `${salt}:${hashedPassword}`}
    users.push(user);
    
    console.log(user);
}

function login(email, password) {
    const user = users.find(value => value.email ===  email);
    
    const [ salt, key ] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);
    
    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);
    
    if (match) return console.log('Login Success')
    else return console.log('Login Fail');
}

signup('test@test.com', 'testing');
login('test@test.com', 'testing');
