const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogComments extends Model {}

BlogComments.init(
  {
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_body: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [256],
      // Future Dev: how do I allow images or emojis to be valid additions to a comment post?
    },
    // Format date as MM/DD/YYYY
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
    modelName: 'blogcomments',
  }
);

module.exports = BlogComments;
