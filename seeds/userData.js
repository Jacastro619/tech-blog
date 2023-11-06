const { User } = require("../models");
const sequelize = require("../config/connection");

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

const seedUsers = async () => {
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
};

module.exports = seedUsers;
