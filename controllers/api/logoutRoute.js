// Routes to Post for logout and get session
const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.post('/users/logout', withAuth, (req, res) => {
  // Destroy the user's session
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send("Error destroying session: Try again! " + err);
    } else {
      res.status(200).send("Successfully logged out!");
    }
  });
});

module.exports = router;