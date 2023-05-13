// Routes to Post for login and get session
const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');



//create a user - Sign Up
router.post('/', withAuth, async (req, res) => {
  try {
    const userData = await User.create({ 
      email: req.body.email,
      password: req.body.password,
      username: req.body.user_name,
      name: req.body.name,
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.email = userData.email;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//find a user by email
//login
router.post('/login', withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(401)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(420)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      //saved in cookie
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// logout
router.post('/users/logout', withAuth, async (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

