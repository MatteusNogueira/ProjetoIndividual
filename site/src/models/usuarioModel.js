var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT idUsuario, nome, email, dtNasc, imagem_perfil as imgPerf FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha, dtNasc) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha, dtnasc) VALUES ('${nome}', '${email}', '${senha}', '${dtNasc}');
    `;
    return database.executar(instrucao);
}

function cad2(){
    var instrucao2 = `
        SELECT idUsuario FROM usuario order by idUsuario DESC LIMIT 1 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao2);
    return database.executar(instrucao2);
}

function cadastrarBanda(banda, estilo, cep, rua, cidade, estado, id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", banda, estilo, cep);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO endereco (cep, estado, cidade, rua, fkUser) VALUES ('${cep}', '${estado}', '${cidade}', '${rua}', ${id});
    `;

    var instrucao2 = `
        UPDATE usuario SET bandaFav = '${banda}' where idUsuario = ${id};
    `;
    var instrucao3 = `
    
        UPDATE usuario SET estiloFav = '${estilo}' where idUsuario = ${id};
    `
    database.executar(instrucao2);
    database.executar(instrucao3);
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function salvar(imagem, id) {
    console.log(imagem, id)
    var instrucao = `UPDATE usuario set imagem_perfil ='${imagem}' where idUsuario = ${id};`;
    console.log(instrucao);
    return database.executar(instrucao);
  }

  function buscarUsuarioPeloId(id) {
    const instrucao = `select imagem_perfil from usuario where idUsuario = ${id}`;
  
    return database.executar(instrucao);
  }

module.exports = {
    autenticar,
    cadastrar,
    cadastrarBanda,
    cad2,
    salvar,
    buscarUsuarioPeloId
};