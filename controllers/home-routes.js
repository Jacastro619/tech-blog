const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("homepage");
});

router.get("/view", async (req, res) => {
  res.render("view-post");
});

router.get("/dashboard", async (req, res) => {
  res.render("dashboard");
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
