const { Router } = require("express");
const { userRouter } = require("./userRoutes");

const router = Router();

router.get("/", (req, res) => {
    res.status(200).send("API de lista de tareas funcionando correctamente");
});

router.use("/users", userRouter)

module.exports = {
    router
};