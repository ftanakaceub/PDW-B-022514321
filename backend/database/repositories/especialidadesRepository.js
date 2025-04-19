const { query } = require('../database');

const parser = (resposta) => {
    return resposta.map(item => ({
        id: item.id,
        nome: item.nome,
    }));
};

const getAll = async () => {
    const resposta = await query('SELECT * FROM especialidades');
    return parser(resposta);
};

module.exports = { getAll };

