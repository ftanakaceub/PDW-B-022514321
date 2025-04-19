const { query } = require("../database");

const parser = (resposta) => {
  return resposta.map((item) => ({
    id: item.id,
    nome: item.nome,
    cpf: item.cpf,
  }));
};

const getAll = async () => {
  const resposta = await query("SELECT * FROM usuarios");
  return parser(resposta);
};

const getById = async (id) => {
  const resposta = await query("SELECT * FROM usuarios WHERE id = $1", [id]);
  return parser(resposta);
};

const create = async (usuario) => {
  const resposta = await query(
    "INSERT INTO usuarios (nome, cpf) VALUES ($1, $2) RETURNING *",
    [usuario.nome, usuario.cpf]
  );
  return parser(resposta);
};

const update = async (id, usuario) => {
  const resposta = await query(
    "UPDATE usuarios SET nome = $1, cpf = $2 WHERE id = $3 RETURNING *",
    [usuario.nome, usuario.cpf, id]
  );
  return parser(resposta);
};

const deleteById = async (id) => {
  const resposta = await query("DELETE FROM usuarios WHERE id = $1", [id]);
  return resposta.rowCount;
};

module.exports = { getAll, getById, create, update, deleteById };
