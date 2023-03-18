const router = require('express').Router();
//TODO: Add additional routers and then routes below from other route files


const apiRoutes = require('./api');
router.use('/api', apiRoutes);

module.exports = router;
