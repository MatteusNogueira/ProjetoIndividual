var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            idUsuario: resultadoAutenticar[0].idUsuario,
                            email: resultadoAutenticar[0].email,
                            nome: resultadoAutenticar[0].nome,
                            senha: resultadoAutenticar[0].senha,
                            img: resultadoAutenticar[0].imgPerf,
                            dtNasc: resultadoAutenticar[0].dtNasc
                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}


function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var dtNasc = req.body.nascimentoServer;
    var sexo = req.body.sexoServer;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.cadastrar(nome, email, senha, dtNasc, sexo)
        .then(
            function (resultado) {

                usuarioModel.cad2()
                    .then(
                        function (resultado2) {

                            if(resultado2.length == 1){
                                console.log("teste 2");

                                res.json({
                                    idUser: resultado2[0].idUsuario
                                });


                                console.log(resultado2[0].idUsuario);
                            }
                            
                        }
                    ).catch(

                        function (erro) {
                            console.log(erro);
                            console.log(
                                "\nHouve um erro ao realizar o cadastro! Erro: ",
                                erro.sqlMessage
                            );
                            res.status(500).json(erro.sqlMessage);
                        }
                    );


            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    
}

//
function cadastrarBanda(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var banda = req.body.bandaServer;
    var estilo = req.body.estiloServer;
    var cep = req.body.cepServer;
    var rua = req.body.ruaServer;
    var cidade = req.body.cidadeServer;
    var estado = req.body.estadoServer;
    var id = req.body.idServer;

    console.log(rua, cidade, estado, id, banda, estilo)
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarBanda(banda, estilo, cep, rua, cidade, estado, id)
            .then(
                function (resultado) {
                    console.log("asldjnasjndlasdn" + JSON.stringify(resultado));
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    
}

function salvar(req, res) {
    const imagem = req.file.filename;
    var id = req.body.id;
    console.log('asodnao');
    usuarioModel.salvar(imagem, id)
    .then(resultado => {
        console.log(resultado);
      res.status(201).send("Usuario criado com sucesso");
    }).catch(err => {
        console.log(err);
      res.status(500).send(err);
    });
  }
  

  function buscarUsuarioPeloId(req, res) {
    console.log(req.params.id + 'Aqui deveria estar o id');
    usuarioModel.buscarUsuarioPeloId(req.params.id)
    .then(resultado => {
      res.json(resultado);
    }).catch(err => {
      res.status(500).send(err);
    });
  }

module.exports = {
    autenticar,
    cadastrar,
    cadastrarBanda,
    salvar,
    buscarUsuarioPeloId
}