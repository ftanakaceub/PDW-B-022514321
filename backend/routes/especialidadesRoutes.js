var express = require('express');
var router = express.Router();
const { getTodasEspecialidades } = require('../controllers/especialidadesController');

router.get('/', getTodasEspecialidades);

module.exports = router;