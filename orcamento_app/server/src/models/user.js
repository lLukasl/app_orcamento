const knex = require('../database/connection');

const userSchema = {
  tableName: 'users',
  idColumn: 'id',
  columns: ['name', 'email', 'cpf', 'addressId']
};

const getUserById = (id) => knex(userSchema.tableName).where(userSchema.idColumn, id).first();
const getAllUsers = () => knex(userSchema.tableName).select('*');
const createUser = (user) => knex(userSchema.tableName).insert(user);
const updateUser = (id, user) => knex(userSchema.tableName).where(userSchema.idColumn, id).update(user);
const deleteUser = (id) => knex(userSchema.tableName).where(userSchema.idColumn, id).del();

module.exports = {
  getUserById,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
};
