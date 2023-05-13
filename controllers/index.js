const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const apiRoutes = require('./api');
const logoutRoute = require('./api/logoutRoute');


router.use('/api', apiRoutes);
router.use('/', blogRoutes); // express is inferring this is the base route/root path
router.use('/logout', logoutRoute);


module.exports = router;
