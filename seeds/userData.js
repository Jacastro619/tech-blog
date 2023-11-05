const { User } = require("../models");

const userData = [
  {
    username: "Tester123",
    password: "password123",
  },
  {
    username: "Jacastro619!!!",
    password: "Jacrispy619",
  },
  {
    username: "Tester456",
    password: "password456",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
