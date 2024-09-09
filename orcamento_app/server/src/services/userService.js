const knex = require('../database/connection');

const getAllUsers = async () => {
  return knex('users').select('*');
};

const createUser = async (user) => {
  return knex('users').insert(user);
};

const updateUser = async (id, user) => {
  return knex('users').where('id', id).update(user);
};

const deleteUser = async (id) => {
  return knex('users').where('id', id).del();
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
};