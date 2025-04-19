const { getAll } = require('../database/repositories/especialidadesRepository');

const getTodasEspecialidades = async (req, res) => {
    const especialidades = await getAll();
    console.log("🚀 ~ getTodasEspecialidades ~ especialidades:", especialidades)
    res.send(especialidades);
};

module.exports = { getTodasEspecialidades };