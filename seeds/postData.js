const { Post } = require("../models");

const postData = [
  {
    title: "The Orange Theory",
    description: "This is a breif explination of the orange theory",
    user_id: 2,
  },
  {
    title: "The Blue Theory",
    description: "This is a breif explination of the blue theory",
    user_id: 1,
  },
  {
    title: "The Red Theory",
    description: "This is a breif explination of the red theory",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
