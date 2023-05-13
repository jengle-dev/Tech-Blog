const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const { Profile } = require('../models');

class Profile extends Model {};

// Future Dev: Is there anything that I can add to a profile, such as profile photo, emoji or avatar option?
// Leaving this file and comment here for future development