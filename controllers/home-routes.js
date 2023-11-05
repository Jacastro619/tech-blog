const router = require("express").Router();
const { Post, Comment, User } = require("../models");
const { withAuth, areAuth } = require("../utils/auth");

const serverError = { message: "Internal Server Error" };

router.get("/", withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));

    console.log(posts);

    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(serverError);
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [{ model: User, attributes: ["username"] }],
    });
    const post = dbPostData.get({ plain: true });

    console.log(post);

    res.render("view-post", { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(serverError);
  }
});

router.get("/dashboard", async (req, res) => {
  console.log(req.session);
  try {
    const dbDashData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const posts = dbDashData.map((post) => post.get({ plain: true }));

    console.log(posts);
    res.render("dashboard", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(serverError);
  }
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/new", async (req, res) => {
  res.render("new-post");
});

router.get("/edit", async (req, res) => {
  res.render("edit-post");
});

router.get("/comment", async (req, res) => {
  res.render("comment");
});

module.exports = router;
