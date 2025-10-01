const { Router } = require("express");
const { createUser, getAllUsers, deleteUser, getUserById, updateUser } = require("../controllers/userController");



const userRouter = Router();

userRouter.post("/", createUser);
userRouter.get("/", getAllUsers );
userRouter.get("/:id", getUserById);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);


module.exports = {
    userRouter
};