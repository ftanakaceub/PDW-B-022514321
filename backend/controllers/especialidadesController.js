const {
  getAll,
  getById,
  create,
  update,
  deleteById,
} = require("../database/repositories/especialidadesRepository");

const getTodasEspecialidades = async (req, res) => {
  const encontrados = await getAll();
  res.send(encontrados);
};

const getEspecialidadeById = async (req, res) => {
  const encontrados = await getById(req.params.id);
  if (encontrados.length === 0) {
    res.status(404).send("Especialidade não encontrada");
  } else {
    res.send(encontrados[0]);
  }
};

const createEspecialidade = async (req, res) => {
  try {
    const body = req.body;
    if (!body.nome) {
      res.status(400).send("O nome da especialidade é obrigatório");
      return;
    }

    if (typeof body.nome !== "string") {
      res.status(400).send("O nome da especialidade deve ser uma string");
      return;
    }

    if (body.nome.length < 1) {
      res
        .status(400)
        .send("O nome da especialidade deve ter no mínimo 1 caracter");
      return;
    }

    if (body.nome.length > 100) {
      res
        .status(400)
        .send("O nome da especialidade deve ter no máximo 100 caracteres");
      return;
    }

    const novaEspecialidade = await create(body);
    res.status(201).send(novaEspecialidade);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateEspecialidade = async (req, res) => {
  try {
    const body = req.body;
    if (!body.nome) {
      res.status(400).send("O nome da especialidade é obrigatório");
      return;
    }

    if (typeof body.nome !== "string") {
      res.status(400).send("O nome da especialidade deve ser uma string");
      return;
    }

    if (body.nome.length < 1) {
      res
        .status(400)
        .send("O nome da especialidade deve ter no mínimo 1 caracter");
      return;
    }

    if (body.nome.length > 100) {
      res
        .status(400)
        .send("O nome da especialidade deve ter no máximo 100 caracteres");
      return;
    }

    const encontrados = await getById(req.params.id);
    if (encontrados.length === 0) {
      res.status(404).send("Especialidade não encontrada");
      return;
    }

    const atualizados = await update(req.params.id, req.body);
    res.send(atualizados[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteEspecialidade = async (req, res) => {
  try {
    const deletados = await deleteById(req.params.id);
    if (deletados === 0) {
      res.status(404).send("Especialidade não encontrada");
      return;
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getTodasEspecialidades,
  getEspecialidadeById,
  createEspecialidade,
  updateEspecialidade,
  deleteEspecialidade,
};
