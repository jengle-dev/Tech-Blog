// REMINDER that this is the main file that seeds the db initially

const sequelize = require('../config/connection');
const { User, BlogPosts, Profile, BlogComments } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
// const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blogPost of blogData) {
    await BlogPosts.create({
      ...blogPost,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

module.exports = seedDatabase;