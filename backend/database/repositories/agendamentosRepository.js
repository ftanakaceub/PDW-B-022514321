const { query } = require("../database");

const parser = (resposta) => {
  return resposta.map((item) => ({
    id: item.id,
    data_hora: item.data_hora,
    profissional_nome: item.profissional_nome,
    usuario_nome: item.usuario_nome,
    usuario_cpf: item.usuario_cpf,
  }));
};

const getAll = async () => {
  const resposta = await query(
    "SELECT a.id, a.data_hora, p.nome as profissional_nome, u.nome as usuario_nome, u.cpf as usuario_cpf FROM agendamentos a LEFT JOIN profissionais p ON a.profissional_id = p.id LEFT JOIN usuarios u ON a.usuario_id = u.id"
  );
  return parser(resposta);
};

const getByProfissionalId = async (profissionalId) => {
  const resposta = await query(
    "SELECT a.id, a.data_hora, p.nome as profissional_nome, u.nome as usuario_nome, u.cpf as usuario_cpf FROM agendamentos a LEFT JOIN profissionais p ON a.profissional_id = p.id LEFT JOIN usuarios u ON a.usuario_id = u.id WHERE a.profissional_id = $1",
    [profissionalId]
  );
  return parser(resposta);
};

const getByUsuarioId = async (usuarioId) => {   
  const resposta = await query(
    "SELECT a.id, a.data_hora, p.nome as profissional_nome, u.nome as usuario_nome, u.cpf as usuario_cpf FROM agendamentos a LEFT JOIN profissionais p ON a.profissional_id = p.id LEFT JOIN usuarios u ON a.usuario_id = u.id WHERE a.usuario_id = $1",
    [usuarioId]
  );
  return parser(resposta);
};

const getById = async (id) => { 
  const resposta = await query(
    "SELECT a.id, a.data_hora, p.nome as profissional_nome, u.nome as usuario_nome, u.cpf as usuario_cpf FROM agendamentos a LEFT JOIN profissionais p ON a.profissional_id = p.id LEFT JOIN usuarios u ON a.usuario_id = u.id WHERE a.id = $1",
    [id]
  );
  return parser(resposta);
};

const create = async (agendamento) => { 
  console.log("🚀 ~ create ~ agendamento:", agendamento)
  const resposta = await query(
    "INSERT INTO agendamentos (usuario_id, profissional_id, data_hora) VALUES ($1, $2, $3) RETURNING *",
    [agendamento.usuario_id, agendamento.profissional_id, agendamento.data_hora]
  );
  return parser(resposta);
};

const update = async (id, agendamento) => { 
  const resposta = await query(
    "UPDATE agendamentos SET usuario_id = $1, profissional_id = $2, data_hora = $3 WHERE id = $4 RETURNING *",
    [agendamento.usuario_id, agendamento.profissional_id, agendamento.data_hora, id]
  );
  return parser(resposta);
};

const deleteById = async (id) => { 
  const resposta = await query("DELETE FROM agendamentos WHERE id = $1", [id]);
  return resposta.rowCount;
};

module.exports = { getAll, getByProfissionalId, getByUsuarioId, getById, create, update, deleteById };
