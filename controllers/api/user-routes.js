const router = require("express").Router();
const { User } = require("../../models");

const serverErr = { message: "Internal Server Error" };
const loginErr = { message: "Incorrect email or password" };
const loginSuccess = { message: "You are now logged in!" };

router.post("/", async (req, res) => {
  try {
    const dbUserInfo = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserInfo);
    });
  } catch (err) {
    res.status(500).json(serverErr);
  }
});

router.post("/login", async (req, res) => {
  try {
    const dbUserInfo = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserInfo) {
      res.status(400).json(loginErr);
      return;
    }

    const correctPassword = await dbUserInfo.checkPassword(req.body.password);

    if (!correctPassword) {
      res.status(400).json(loginErr);
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(loginSuccess);
    });
  } catch (err) {
    res.status(500).json(serverErr);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
});

module.exports = router;
