const {
  getAll,
  getById,
  create,
  update,
  deleteById,
} = require("../database/repositories/agendamentosRepository");

const {
  getById: getUsuarioById,
} = require("../database/repositories/usuariosRepository");
const {
  getById: getProfissionalById,
} = require("../database/repositories/profissionaisRepository");

const getTodosAgendamentos = async (req, res) => {
  const agendamentos = await getAll();
  res.status(200).json(agendamentos);
};

const getAgendamento = async (req, res) => {
  const { id } = req.params;
  const agendamentos = await getById(id);
  res.status(200).json(agendamentos[0]);
};

const createAgendamento = async (req, res) => {
  try {
    const { usuario_id, profissional_id, data_hora } = req.body;
    if (!usuario_id || !profissional_id || !data_hora) {
      res.status(400).json({ error: "Todos os campos são obrigatórios" });
      return;
    }

    if (typeof usuario_id !== "string" || typeof profissional_id !== "string") {
      res.status(400).json({ error: "IDs devem ser strings" });
      return;
    }

    if (!(data_hora instanceof Date) && isNaN(Date.parse(data_hora))) {
      res.status(400).json({ error: "Data/hora inválida" });
      return;
    }

    const dataAgendamento = new Date(data_hora);
    const hoje = new Date();
    if (dataAgendamento < hoje) {
      res.status(400).json({ error: "Data/hora deve ser futura" });
      return;
    }
    const agendamento = await create(req.body);
    res.status(201).json(agendamento[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAgendamento = async (req, res) => {
  try {
    const { id } = req.params;
    const { usuario_id, profissional_id, data_hora } = req.body;
    if (!usuario_id || !profissional_id || !data_hora) {
      res.status(400).json({ error: "Todos os campos são obrigatórios" });
      return;
    }

    if (typeof usuario_id !== "string" || typeof profissional_id !== "string") {
      res.status(400).json({ error: "IDs devem ser strings" });
      return;
    }

    if (!(data_hora instanceof Date) && isNaN(Date.parse(data_hora))) {
      res.status(400).json({ error: "Data/hora inválida" });
      return;
    }

    const dataAgendamento = new Date(data_hora);
    const hoje = new Date();
    if (dataAgendamento < hoje) {
      res.status(400).json({ error: "Data/hora deve ser futura" });
      return;
    }

    const encontrado = await getById(id);
    if (encontrado.length === 0) {
      res.status(404).json({ error: "Agendamento não encontrado" });
      return;
    }

    const usuariosEncontrados = await getUsuarioById(usuario_id);
    const usuarioEncontrado =
      usuariosEncontrados.length > 0 ? usuariosEncontrados[0] : null;
    if (!usuarioEncontrado) {
      res.status(404).json({ error: "Usuário não encontrado" });
      return;
    }

    const profissionaisEncontrados = await getProfissionalById(profissional_id);
    const profissionalEncontrado =
      profissionaisEncontrados.length > 0 ? profissionaisEncontrados[0] : null;
    if (!profissionalEncontrado) {
      res.status(404).json({ error: "Profissional não encontrado" });
      return;
    }

    const agendamento = await update(id, req.body);
    res.status(200).json(agendamento[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAgendamento = async (req, res) => {
  const { id } = req.params;
  const deletado = await deleteById(id);
  if (deletado === 0) {
    res.status(404).json({ error: "Agendamento não encontrado" });
    return;
  }
  res.status(204).json();
};
module.exports = {
  getTodosAgendamentos,
  getAgendamento,
  createAgendamento,
  updateAgendamento,
  deleteAgendamento,
};
