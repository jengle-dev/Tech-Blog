const router = require('express').Router();
const userRoutes = require('./userRoutes');
const logoutRoutes = require('./logoutRoute');
// const login = require('./loginRoutes');

router.use('/users', userRoutes);
router.use('/logout', logoutRoute);
// router.use('/login', login);

module.exports = router;
