var express = require("express");
var router = express.Router();
const upload = require('../config/configUpload');

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrarBanda", function (req, res) {
    usuarioController.cadastrarBanda(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post('/cadastroImg', upload.single('foto'), (req, res) => {
    usuarioController.salvar(req, res);
});

router.get('/:id', upload.single('foto'), (req, res) => {
    usuarioController.buscarUsuarioPeloId(req, res);
  });
  

module.exports = router;