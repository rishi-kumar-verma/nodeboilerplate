/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
const Sequelize = require('sequelize');
const bcryptService = require('../services/bcrypt.service');

const sequelize = require('../../config/database');

const hooks = {
  beforeCreate(user) {
    user.password = bcryptService().password(user);
  },
};

const tableName = 'users';

const User = sequelize.define(
  'User', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
    },
  },
  {
  // don't forget to enable timestamps!
    timestamps: true,
    // I don't want createdAt
    createdAt: 'createdAt',
    // I want updatedAt to actually be called updateTimestamp
    updatedAt: 'updatedAt',
    // And deletedAt to be called destroyTime (remember to enable paranoid for this to work)
    deletedAt: 'deletedAt',
    paranoid: true,
    hooks,
    tableName,
  },
);

// eslint-disable-next-line
User.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  delete values.password;
  return values;
};

module.exports = User;
