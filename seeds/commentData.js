const { Comment } = require("../models");

const commentData = [
  {
    description:
      "This should be more of a breif explination of the orange theory",
    user_id: 3,
    post_id: 2,
  },
  {
    description:
      "This should be more of a breif explination of the blue theory",
    user_id: 2,
    post_id: 1,
  },
  {
    description: "This should be more of a breif explination of the red theory",
    user_id: 1,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
