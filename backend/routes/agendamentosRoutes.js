var express = require("express");
var router = express.Router();
const {
  getTodosAgendamentos,
  getAgendamento,
  createAgendamento,
  updateAgendamento,
  deleteAgendamento,
} = require("../controllers/agendamentosController");

router.get("/", getTodosAgendamentos);
router.get("/:id", getAgendamento);
router.post("/", createAgendamento);
router.put("/:id", updateAgendamento);
router.delete("/:id", deleteAgendamento);

module.exports = router;
