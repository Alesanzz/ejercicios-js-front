const express = require("express");
const router = express.Router();
const controller = require("../controller/main.controller");

router.get('/', controller.home);
router.get('/culebrita', controller.culebrita);
router.get('/contador', controller.contador);
router.get('/listar', controller.listar);
router.get('/ahorcado', controller.ahorcado);
router.get('/desaparecerCuadro', controller.desaparecerCuadro);

router.get('/formulario1', controller.formulario1);
router.get('/formulario2', controller.formulario2);
router.get('/formulario3', controller.formulario3);
router.get('/formulario4', controller.formulario4);

module.exports = router;