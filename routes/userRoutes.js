const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getAllUsers } = require('../controllers/userController');
const adminAuth = require('../middleware/auth');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', adminAuth, getAllUsers);

module.exports = router;
