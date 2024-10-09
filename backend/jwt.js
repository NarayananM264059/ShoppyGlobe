import crypto from 'crypto';

// Generate a random JWT secret
const generateJWTSecret = () => {
  return crypto.randomBytes(32).toString('hex'); 
};

const jwtSecret = generateJWTSecret();
console.log('Your new JWT secret is:', jwtSecret);
