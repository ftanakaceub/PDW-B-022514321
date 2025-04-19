var express = require("express");
var router = express.Router();
const {
  getTodasEspecialidades,
  getEspecialidadeById,
  createEspecialidade,
  updateEspecialidade,
  deleteEspecialidade,
} = require("../controllers/especialidadesController");

router.get("/", getTodasEspecialidades);
router.get("/:id", getEspecialidadeById);
router.post("/", createEspecialidade);
router.put("/:id", updateEspecialidade);
router.delete("/:id", deleteEspecialidade);
module.exports = router;
