const mongoose = require("mongoose");
const User = require("../models/user");


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        console.log(users);
        res.json(users)
    } catch (error) {
        res.status(500).json({message: "Error al obtener los usuarios", error});
    }
};

const createUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const newUser = new User({name, email, age });
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({message: "Error al crear el usuario", error });
    }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);
    if (!updatedUser)
      return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({message: "ID invalido"});
    }
    const deletedUser = await User.findByIdAndDelete(id);
    if(!deletedUser) {
        return res.status(404).json({message: "Usuario no encontrado" });
    }
    res.json({message: "Usuario eliminado correctamente"})

    } catch (error) {
        res.status(500).json({message: "Error al eliminar el usuario", error: error.message});
    }

};

module.exports = { getAllUsers, createUser, deleteUser, updateUser, getUserById}

