// REMINDER that this is the main file that seeds the db initially

const sequelize = require('../src/config/connection');
const { User } = require('../src/models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const { BlogPosts } = require('../src/models');

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

seedDatabase();