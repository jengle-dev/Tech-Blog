const APIrouter = require('express').Router();
//TODO: Add additional routers and then routes below from other route files
const blogRoutes = require('./blogRoutes');
const apiRoutes = require('./api');

APIrouter.use('/api', apiRoutes);
APIrouter.use(blogRoutes); // express is inferring this is the base route/root path

module.exports = APIrouter;
