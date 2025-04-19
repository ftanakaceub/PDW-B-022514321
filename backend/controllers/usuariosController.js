const {
  getAll,
  getById,
  create,
  update,
  deleteById,
} = require("../database/repositories/usuariosRepository");

const getTodosUsuarios = async (req, res) => {
  const usuarios = await getAll();
  res.status(200).json(usuarios);
};

const getUsuarioById = async (req, res) => {
  const usuarios = await getById(req.params.id);
  res.status(200).json(usuarios[0]);
};

const createUsuario = async (req, res) => {
  try {
    const body = req.body;
    if (!body.nome || !body.cpf) {
      res.status(400).json({ error: "Nome e CPF são obrigatórios" });
      return;
    }
    if (typeof body.nome !== "string") {
      res.status(400).json({ error: "Nome deve ser uma string" });
      return;
    }
    if (typeof body.cpf !== "string") {
      res.status(400).json({ error: "CPF deve ser uma string" });
      return;
    }
    if (body.cpf.length !== 11) {
      res.status(400).json({ error: "CPF deve ter 11 dígitos" });
      return;
    }

    const usuario = await create(body);
    res.status(201).json(usuario[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUsuario = async (req, res) => {
  try {
    const body = req.body;
    if (!body.nome || !body.cpf) {
      res.status(400).json({ error: "Nome e CPF são obrigatórios" });
      return;
    }
    if (typeof body.nome !== "string") {
      res.status(400).json({ error: "Nome deve ser uma string" });
      return;
    }
    if (typeof body.cpf !== "string") {
      res.status(400).json({ error: "CPF deve ser uma string" });
      return;
    }
    if (body.cpf.length !== 11) {
      res.status(400).json({ error: "CPF deve ter 11 dígitos" });
      return;
    }

    const encontrado = await getById(req.params.id);
    if (encontrado.length === 0) {
      res.status(404).json({ error: "Usuário não encontrado" });
      return;
    }

    const atualizado = await update(req.params.id, body);
    res.status(200).json(atualizado[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
    return;
  }
};

const deleteUsuario = async (req, res) => {
  const deletado = await deleteById(req.params.id);
  if (deletado === 0) {
    res.status(404).json({ error: "Usuário não encontrado" });
    return;
  }
  res.status(204).json();
};

module.exports = {
  getTodosUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};
