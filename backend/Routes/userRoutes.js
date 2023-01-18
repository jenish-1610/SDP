const express = require("express");
const User = require("../Model/User");
const mailer = require("../Services/EmailServices");
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const available_users = await User.find({
      email: req.body.email,
    });
      if (available_users.length) {
        res.json({
            code: 100,
            status : 'email already registered'
        })
    } else {
      const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
      });
          user.save();
          mailer(req.body.email);
        res.json({
            code: 200,
            status : 'registered sucessfully'
        })
    }
  } catch (error) {
    res.json({
            code: 300,
            status : 'something went wrong'
        })
  }
});

router.post("/login", async (req, res) => {
  const entered_email = await User.find({
    $or: [{ username: req.body.username }, { email: req.body.username }],
  });

  if (entered_email.length) {
    if (entered_email[0].password === req.body.password) {
      res.json({
            code: 200,
            status : 'Login sucessfully'
        })
    } else {
      res.json({
            code: 100,
            status : 'Invalid credentials'
        })
    }
  } else {
    res.json({
      code: 100,
      status: 'Invalid credentials',
    });
  }
});

module.exports = router;
