const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userRepository = require('../repositories/userRepository');

module.exports = {
  login: async (email, password) => {
    const user = await userRepository.findByEmail(email);
    if (!user || !bcrypt.compareSync(password, user.password_hash)) {
      throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);
    return token;
  }
};