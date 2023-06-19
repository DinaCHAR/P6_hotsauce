const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
console.log("signup");
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

console.log("router");

module.exports = router;
console.log("test");