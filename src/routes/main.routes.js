const express = require("express");
const router = express.Router();
const controller = require("../controller/main.controller");

router.get('/', controller.home);
router.get('/culebrita', controller.culebrita);
router.get('/contador', controller.contador);
router.get('/listar', controller.listar);
router.get('/ahorcado', controller.ahorcado);
router.get('/desaparecerCuadro', controller.desaparecerCuadro);

module.exports = router;