var express = require("express");
var router = express.Router();
const {
  getTodosUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} = require("../controllers/usuariosController");

router.get("/", getTodosUsuarios);
router.get("/:id", getUsuarioById);
router.post("/", createUsuario);
router.put("/:id", updateUsuario);
router.delete("/:id", deleteUsuario);
module.exports = router;
