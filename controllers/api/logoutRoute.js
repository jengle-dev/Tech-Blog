// Routes to Post for login and get session
const router = require('express').Router();

exports.logout = (req, res) => {
    // Destroy the user's session
    req.session.destroy((err) => {
      if (err) {
        res.status(500).send("Error destroying session: Try again! " + err);
      } else {
        res.status(200).send("Successfully logged out!");
      }
    });
  };