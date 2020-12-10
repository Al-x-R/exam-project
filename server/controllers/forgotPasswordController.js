const nodemailer = require('nodemailer');
const { User } = require('../models');
const bcrypt = require('bcrypt');
const config = require('../configs/config');
const JwtService = require('../services/jwtService');

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
      const hashedPass = await bcrypt.hash(password, 10);

      const payload = {
        hashedPass,
      };

      const token = await JwtService.sign(
        payload,
        tokenSecret,
        {
          expiresIn: '5m',
        },
      );

      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'email@gmail.com',
          pass: 'Test357',
        },
      });

      const data = {
        from: 'my.testing.super.email@gmail.com',
        to: '85@gmail.com',
        subject: 'Password help has arrived',
        text: 'You received this message because you (or someone else) made a request to change the password for your account. \n\n'
          + 'please click on the following link or paste it into the browser to complete the process within ten minutes of  reciving it message\n\n'
          + `http://localhost:3000/forgot_password/${token} \n\n`
          + 'if you did not request this, please ignore ignore this email',
      };

      //send mail
      await transporter.sendMail(data, function (error, data) {
        if (error) {
          return res.json({
            error: error.message,
          });
        }
        return res.status(200).json({ message: "Email sent!" });
      });
      return;
    }

    return res.status(400).json({ error: 'User with this email does not exists' });

  } catch (e) {
    next(e);
  }
};