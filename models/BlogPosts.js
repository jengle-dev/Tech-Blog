const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogPosts extends Model {}

BlogPosts.init(
  {
    blogPost_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [70],
    },
    post_body: {
      type: DataTypes.STRING,
      allowNull: false,
      //length undefined 
      len: [256],
      // Future Dev: how do I allow images or emojis to be valid additions to a blog post?
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogposts',
  }
);

module.exports = BlogPosts;
