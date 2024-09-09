
const knex = require('../database/connection');

const userSchema = {
  tableName: 'address',
  idColumn: 'id',
  columns: ['street', 'number', 'neighborhood', 'city', 'state', 'country']
};

const getAddressById = (id) => knex(userSchema.tableName).where(userSchema.idColumn, id).first();
const getAllAddress = () => knex(userSchema.tableName).select('*');
const createAddress = (address) => knex(userSchema.tableName).insert(address);
const updateAddress = (id, address) => knex(userSchema.tableName).where(userSchema.idColumn, id).update(address);
const deleteAddress = (id) => knex(userSchema.tableName).where(userSchema.idColumn, id).del();

module.exports = {
  getAddressById,
  getAllAddress,
  createAddress,
  updateAddress,
  deleteAddress
};