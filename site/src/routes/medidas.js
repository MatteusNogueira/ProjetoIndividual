var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:estilo", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/ultimasBanda/:banda", function (req, res) {
    medidaController.buscarUltimasMedidasBanda(req, res);
});


router.get("/ultimasOrientacoes", function (req, res) {
    medidaController.buscarUltimasMedidasSexo(req, res);
});
module.exports = router;