const router = require("express").Router();
const { Post, Comment, User } = require("../models");
const { withAuth } = require("../utils/auth");

const serverError = { message: "Internal Server Error" };

router.get("/", withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(serverError);
  }
});

router.get("/post/:id", withAuth, async (req, res) => {
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
  try {
    const dbDashData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const posts = dbDashData.map((post) => post.get({ plain: true }));

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

router.post("/new", async (req, res) => {
  try {
    const addPost = await Post.create({
      title: req.body.title,
      description: req.body.content,
      user_id: req.session.user_id,
    });
    res.status(200).json(addPost);
  } catch (err) {
    res.status(500).json(serverError);
  }
});

router.put("/edit/:id", async (req, res) => {
  try {
    const editPost = await Post.update(
      {
        title: req.body.updatedTitle,
        description: req.body.updatedContent,
        user_id: req.session.user_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(editPost);
  } catch (err) {
    res.status(500).json(serverError);
  }
});

router.get("/edit/:id", (req, res) => {
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
});

router.post("/comment", async (req, res) => {
  try {
    const addComment = await Comment.create({
      description: req.body.comment,
      post_id: req.body.postId,
      user_id: req.session.user_id,
    });
    res.status(200).json(addComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
