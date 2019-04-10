const bcrypt = require('bcrypt');

const SALT_ROUNDS = 11;

const hashPassword = async (password) => {
  const digest = await bcrypt.hash(password, SALT_ROUNDS);
  return digest;
}