const nodemailer = require('nodemailer');
const { User, sequelize } = require('../models');
const bcrypt = require('bcrypt');
const config = require('../configs/config');
const JwtService = require('../services/jwtService');
const jwt_decode = require('jwt-decode');
const { SALT_ROUNDS } = require('./../constants');
const PASSWORD = process.env.PASSWORD
const EMAIL = process.env.EMAIL

const {
  jwt: { tokenSecret },
} = config;

exports.forgotPassword = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;

    const userInstance = await User.findOne({
      where: { email },
    });

    if (userInstance) {
      const hashedPass = await bcrypt.hash(password, SALT_ROUNDS);

      const payload = {
        email,
        hashedPass,
      };

      const token = await JwtService.sign(
        payload,
        tokenSecret,
        {
          expiresIn: '15m',
        },
      );

      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: EMAIL,
          pass: PASSWORD,
        },
      });

      const data = {
        from: EMAIL,
        to: email,
        subject: 'Password help has arrived',
        text: 'You received this message because you (or someone else) made a request to change the password for your account. \n\n'
          + 'please click on the following link or paste it into the browser to complete the process within ten minutes of  reciving it message\n\n'
          + `http://localhost:3000/update-password/${token} \n\n`
          + 'if you did not request this, please ignore ignore this email',
      };

      await transporter.sendMail(data, function (error, data) {
        if (error) {
          return res.json({
            error: error.message,
          });
        }
        return res.status(200).send({
          token: token,
          message: "Email sent!",
        });
      });
      return;
    }
    return res.status(400).json({ error: 'User with this email does not exists' });

  } catch (e) {
    next(e);
  }
};

exports.updatePassword = async (req, res, next) => {
  try {
    const {
      body: { token },
    } = req;
    if (token) {
      const decodeToken = jwt_decode(token);
      const { email, hashedPass } = decodeToken;
      const userInstance = await User.findOne({
        where: { email },
      });
      if (userInstance) {
        try {
          await sequelize.query(`UPDATE "Users" SET "passwordHash"='${hashedPass}' WHERE "email" = '${email}';`);
        } catch (e) {
          next(e);
        }
      }
      res.status(200).send({
        decodeToken,
        userInstance: await userInstance.reload(),
      });
    }
  } catch (e) {
    next(e);
  }

};