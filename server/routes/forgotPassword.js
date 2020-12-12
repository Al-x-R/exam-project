const forgotPasswordRouter = require('express').Router();
const { forgotPassword, updatePassword } = require('../controllers/forgotPasswordController');

forgotPasswordRouter.post('/forgot-password', forgotPassword);
forgotPasswordRouter.post('/update-password', updatePassword);

module.exports = forgotPasswordRouter;