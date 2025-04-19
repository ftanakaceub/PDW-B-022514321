const { query } = require("../database");

const parser = (resposta) => {
  return resposta.map((item) => ({
    id: item.id,
    nome: item.nome,
    especialidade_nome: item.especialidade_nome,
  }));
};

const getAll = async () => {
  const resposta = await query(
    "SELECT p.*, e.nome as especialidade_nome FROM profissionais p LEFT JOIN especialidades e ON p.especialidade_id = e.id"
  );
  return parser(resposta);
};

const getById = async (id) => {
  const resposta = await query(
    "SELECT p.*, e.nome as especialidade_nome FROM profissionais p LEFT JOIN especialidades e ON p.especialidade_id = e.id WHERE p.id = $1",
    [id]
  );
  return parser(resposta);
};

const getByEspecialidadeId = async (especialidadeId) => {
    const resposta = await query(
      "SELECT * FROM profissionais WHERE especialidade_id = $1",
      [especialidadeId]
    );
    return parser(resposta);
  };

const create = async (profissional) => {
  const resposta = await query(
    "INSERT INTO profissionais (nome, especialidade_id) VALUES ($1, $2) RETURNING *",
    [profissional.nome, profissional.especialidade_id]
  );
  return parser(resposta);
};

const update = async (id, profissional) => {
  const resposta = await query(
    "UPDATE profissionais SET nome = $1, especialidade_id = $2 WHERE id = $3 RETURNING *",
    [profissional.nome, profissional.especialidade_id, id]
  );
  return parser(resposta);
};

const deleteById = async (id) => {
  const resposta = await query("DELETE FROM profissionais WHERE id = $1", [id]);
  return resposta.rowCount;
};

module.exports = { getAll, getById, getByEspecialidadeId, create, update, deleteById };
