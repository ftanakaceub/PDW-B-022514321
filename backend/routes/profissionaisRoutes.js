var express = require("express");
var router = express.Router();
const {
  getTodosProfissionais,
  getProfissionalById,
  createProfissional,
  updateProfissional,
  deleteProfissional,
} = require("../controllers/profissionaisController");

router.get("/", getTodosProfissionais);
router.get("/:id", getProfissionalById);
router.post("/", createProfissional);
router.put("/:id", updateProfissional);
router.delete("/:id", deleteProfissional);
module.exports = router;
