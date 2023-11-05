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

    const dbCommentData = await Comment.findAll({
      where: {
        post_id: post.id,
      },
      include: [{ model: User, attributes: ["username"] }],
    });

    const comment = dbCommentData.map((comm) => comm.get({ plain: true }));

    res.render("view-post", { post, comment, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(serverError);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
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

router.get("/comment/:id", withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [{ model: User, attributes: ["username"] }],
    });
    const post = dbPostData.get({ plain: true });

    const dbCommentData = await Comment.findAll({
      where: {
        post_id: post.id,
      },
      include: [{ model: User, attributes: ["username"] }],
    });

    const comment = dbCommentData.map((comm) => comm.get({ plain: true }));

    res.render("comment", { post, comment, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(serverError);
  }
  res.render("comment");
});

router.post("/comment", async (req, res) => {
  try {
    const 
  } catch (err) {
    res.status(500).json(serverError);
  }
});

module.exports = router;
