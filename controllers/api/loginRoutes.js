// Routes to Post for login and get session
const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/login', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/blog');
    return
  }
  res.render('login');
});

module.exports = router;
