// Routes to Post for login and get session
const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

export default class Us
// logout
router.post('/logout', withAuth, async (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;
  