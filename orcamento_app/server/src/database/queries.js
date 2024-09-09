// queries.js
const knex = require('../database/connection');
// Usuários
const getAllUsers = () => knex('users').select('*');
const getUserById = (id) => knex('users').where('id', id).first();
const createUser = (user) => knex('users').insert(user);
const updateUser = (id, user) => knex('users').where('id', id).update(user);
const deleteUser = (id) => knex('users').where('id', id).del();
// Endereços (caso tenha a tabela)
const getAddressById = (id) => knex('addresses').where('id', id).first();
const createAddress = (address) => knex('address').insert(address);
const updateAddress = (id, address) => knex('address').where('id', id).update(address);
const deleteAddress = (id) => knex('address').where('id', id).del();
// ... outras consultas para endereços
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getAddressById,
  createAddress,
  updateAddress,
  deleteAddress
  // ... outras consultas
};
