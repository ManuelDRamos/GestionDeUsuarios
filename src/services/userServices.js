const User = require("../models/user");

const getAllUsers = async () => {
    return await User.find();
};

const createUser = async ({ name, email, age }) => {
    const user = new User({ name, email, age });
    return await user.save();
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

const deleteUser = async (id) => {
    const result = await User.findOneAndDelete(id);
    return result !== null
};

module.exports = { getAllUsers, createUser, deleteUser, getUserById, updateUser}