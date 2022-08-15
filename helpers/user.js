const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const encryptPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

const decryptPassword = async (password, hash) => {
  const match = await bcrypt.compare(password, hash);
  return match;
};

generateAccessToken = ({ id, email }) => {
  const accessTokenSecret = process.env.TOKEN_SECRET;

  return jwt.sign(
    {
      id: id,
      email: email,
    },
    accessTokenSecret,
    {
      expiresIn: 86400,
    }
  );
};

module.exports = {
  encryptPassword,
  decryptPassword,
  generateAccessToken,
};
