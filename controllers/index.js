const APIrouter = require('express').Router();
//TODO: Add additional routers and then routes below from other route files
const apiRoutes = require('./api');
APIrouter.use('/api', apiRoutes);

module.exports = APIrouter;