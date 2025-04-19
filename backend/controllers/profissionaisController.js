const {
  getAll,
  getById,
  create,
  update,
  deleteById,
} = require("../database/repositories/profissionaisRepository");

const {
  getById: getEspecialidadeById,
} = require("../database/repositories/especialidadesRepository");

const getTodosProfissionais = async (req, res) => {
  const encontrados = await getAll();
  res.send(encontrados);
};

const getProfissionalById = async (req, res) => {
  const encontrados = await getById(req.params.id);
  if (encontrados.length === 0) {
    res.status(404).send("Profissional não encontrado");
    return;
  }
  res.send(encontrados[0]);
};

const createProfissional = async (req, res) => {
  try {
    const profissional = req.body;
    if (!profissional.nome || !profissional.especialidade_id) {
      res.status(400).send("Nome e especialidade_id são obrigatórios");
      return;
    }
    if (typeof profissional.nome !== "string") {
      res.status(400).send("Nome deve ser uma string");
      return;
    }
    if (typeof profissional.especialidade_id !== "string") {
      res.status(400).send("especialidade_id deve ser uma string");
      return;
    }

    const criado = await create(profissional);
    res.status(201).send(criado[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateProfissional = async (req, res) => {
  const profissional = req.body;

  if (!profissional.nome || !profissional.especialidade_id) {
    res.status(400).send("Nome e especialidade_id são obrigatórios");
    return;
  }
  if (typeof profissional.nome !== "string") {
    res.status(400).send("Nome deve ser uma string");
    return;
  }
  if (typeof profissional.especialidade_id !== "string") {
    res.status(400).send("especialidade_id deve ser uma string");
    return;
  }

  const especialidade = await getEspecialidadeById(
    profissional.especialidade_id
  );
  if (especialidade.length === 0) {
    res.status(400).send("Especialidade não encontrada");
    return;
  }

  const atualizado = await update(req.params.id, profissional);
  res.send(atualizado[0]);
};

const deleteProfissional = async (req, res) => {
  const deletado = await deleteById(req.params.id);
  if (deletado === 0) {
    res.status(404).send("Profissional não encontrado");
    return;
  }
  res.status(204).send();
};

module.exports = {
  getTodosProfissionais,
  getProfissionalById,
  createProfissional,
  updateProfissional,
  deleteProfissional,
};
