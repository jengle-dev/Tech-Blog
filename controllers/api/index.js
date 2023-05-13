const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const login = require('./loginRoutes');

router.use('/users', userRoutes);
// router.use('/login', login);

module.exports = router;
