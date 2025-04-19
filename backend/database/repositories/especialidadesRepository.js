const { query } = require("../database");

const parser = (resposta) => {
  return resposta.map((item) => ({
    id: item.id,
    nome: item.nome,
  }));
};

const getAll = async () => {
  const resposta = await query("SELECT * FROM especialidades");
  return parser(resposta);
};

const getById = async (id) => {
  const resposta = await query("SELECT * FROM especialidades WHERE id = $1", [
    id,
  ]);
  return parser(resposta);
};

const getByEspecialidadeId = async (especialidadeId) => {
  const resposta = await query("SELECT * FROM especialidades WHERE id = $1", [
    especialidadeId,
  ]);
  return parser(resposta);
};

const create = async (especialidade) => {
  const resposta = await query(
    "INSERT INTO especialidades (nome) VALUES ($1) RETURNING *",
    [especialidade.nome]
  );
  return parser(resposta);
};

const update = async (id, especialidade) => {
  const resposta = await query(
    "UPDATE especialidades SET nome = $1 WHERE id = $2 RETURNING *",
    [especialidade.nome, id]
  );
  return parser(resposta);
};

const deleteById = async (id) => {
  const resposta = await query("DELETE FROM especialidades WHERE id = $1", [
    id,
  ]);
  return resposta.rowCount;
};

module.exports = {
  getAll,
  getById,
  getByEspecialidadeId,
  create,
  update,
  deleteById,
};
