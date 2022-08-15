const { User, Cart } = require("../models");
const { encryptPassword, decryptPassword, generateAccessToken } = require("../helpers/user");

class UserController {
  static async register(req, res) {
    try {
      const {
        name,
        dateOfBirth,
        gender,
        contact: { email, phone },
        password,
      } = req.body;

      const user = await User.findOne({
        raw: true,
        where: {
          email: email,
        },
      });

      if (user) {
        return res.status(400).json({
          code: res.statusCode,
          status: "Email is already registered",
        });
      }

      const hashedPassword = await encryptPassword(password);
      const newUser = await User.create({
        name: name,
        date_of_birth: dateOfBirth,
        gender: gender,
        phone: phone,
        email: email,
        password: hashedPassword,
      });

      await Cart.create({
        user_id: newUser.id,
      });

      res.status(201).json({
        code: res.statusCode,
        status: "New User Created",
        data: newUser,
      });
    } catch (err) {
      res.sendStatus(500);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        raw: true,
        where: {
          email: email,
        },
      });

      if (user === null) {
        return res.status(404).json({
          code: res.statusCode,
          status: "User Not Found",
        });
      }

      const isMatch = await decryptPassword(password, user.password);
      if (!isMatch) {
        return res.status(401).json({
          code: res.statusCode,
          status: "Invalid Password",
        });
      }

      const accessToken = generateAccessToken(user);

      res.status(200).json({
        code: res.statusCode,
        status: "OK",
        data: {
          accessToken: accessToken,
        },
      });
    } catch (err) {
      res.sendStatus(500);
    }
  }
}

module.exports = UserController;
