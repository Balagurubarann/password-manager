const router = require('express').Router();
const { register } = require('../controllers/user.control');

router  
    .post('/register', register)

module.exports = router;
