var database = require("../database/config");

function buscarUltimasMedidas(estilo) {
  instrucaoSql = `select
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'AC' AND estiloFav = '${estilo}' ) as AC,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'AL' AND estiloFav = '${estilo}') as AL,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'AP' AND estiloFav = '${estilo}') as AP,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'AM' AND estiloFav = '${estilo}') as AM,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'BA' AND estiloFav = '${estilo}') as BA,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'CE' AND estiloFav = '${estilo}') as CE,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'DF' AND estiloFav = '${estilo}') as DF,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'ES' AND estiloFav = '${estilo}') as ES,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'GO' AND estiloFav = '${estilo}') as GO,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'MA' AND estiloFav = '${estilo}') as MA,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'MT' AND estiloFav = '${estilo}') as MT,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'MS' AND estiloFav = '${estilo}') as MS,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'MG' AND estiloFav = '${estilo}') as MG,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'PA' AND estiloFav = '${estilo}') as PA,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'PB' AND estiloFav = '${estilo}') as PB,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'PR' AND estiloFav = '${estilo}') as PR,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'PE' AND estiloFav = '${estilo}') as PE,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'PI' AND estiloFav = '${estilo}') as PI,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'RJ' AND estiloFav = '${estilo}') as RJ,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'RN' AND estiloFav = '${estilo}') as RN,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'RS' AND estiloFav = '${estilo}') as RS,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'RO' AND estiloFav = '${estilo}') as RO,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'RR' AND estiloFav = '${estilo}') as RR,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'SC' AND estiloFav = '${estilo}') as SC,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'SP' AND estiloFav = '${estilo}') as SP,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'SE' AND estiloFav = '${estilo}') as SE,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'RN' AND estiloFav = '${estilo}') as RN,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'TO' AND estiloFav = '${estilo}') as 'TO'
		from endereco limit 1;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarUltimasMedidasBanda(banda) {
  instrucaoSql = `select
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'AC' AND bandaFav = '${banda}' ) as AC,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'AL' AND bandaFav = '${banda}') as AL,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'AP' AND bandaFav = '${banda}') as AP,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'AM' AND bandaFav = '${banda}') as AM,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'BA' AND bandaFav = '${banda}') as BA,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'CE' AND bandaFav = '${banda}') as CE,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'DF' AND bandaFav = '${banda}') as DF,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'ES' AND bandaFav = '${banda}') as ES,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'GO' AND bandaFav = '${banda}') as GO,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'MA' AND bandaFav = '${banda}') as MA,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'MT' AND bandaFav = '${banda}') as MT,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'MS' AND bandaFav = '${banda}') as MS,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'MG' AND bandaFav = '${banda}') as MG,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'PA' AND bandaFav = '${banda}') as PA,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'PB' AND bandaFav = '${banda}') as PB,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'PR' AND bandaFav = '${banda}') as PR,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'PE' AND bandaFav = '${banda}') as PE,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'PI' AND bandaFav = '${banda}') as PI,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'RJ' AND bandaFav = '${banda}') as RJ,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'RN' AND bandaFav = '${banda}') as RN,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'RS' AND bandaFav = '${banda}') as RS,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'RO' AND bandaFav = '${banda}') as RO,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'RR' AND bandaFav = '${banda}') as RR,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'SC' AND bandaFav = '${banda}') as SC,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'SP' AND bandaFav = '${banda}') as SP,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'SE' AND bandaFav = '${banda}') as SE,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'RN' AND bandaFav = '${banda}') as RN,
  (select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'TO' AND bandaFav = '${banda}') as 'TO'
	  from endereco limit 1;`;

  console.log("Executando a instrução SQL2 asçdasijd: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
module.exports = {
  buscarUltimasMedidas,
  buscarUltimasMedidasBanda
};
