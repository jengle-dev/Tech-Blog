// Routes to Post for login and get session
const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return
  }
  res.render('./login');
});

module.exports = router;
