const express = require("express");
const router = express.Router();
const controller = require("../controllers/usuariosController");

router.get("/", controller.getUsuarios);
router.get("/livros", controller.getBooks);
router.get("/buscar/:pais")
router.get("/:id", controller.getById);
router.get("/:id/livros", controller.getBookByUser)

module.exports = router;
