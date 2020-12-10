const forgotPasswordRouter = require('express').Router();
const { forgotPassword } = require('../controllers/forgotPasswordController');

forgotPasswordRouter.post('/forgot_password', forgotPassword);

module.exports = forgotPasswordRouter;