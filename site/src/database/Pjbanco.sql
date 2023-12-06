
create database druming;

drop database druming;

use druming;

create table endereco (
	idEndereco int primary key auto_increment,
    cep char(8),
    cidade varchar(50),
    estado varchar(20),
    rua varchar(70),
    fkUser int, 
    constraint fkU foreign key (fkUser) references usuario(idUsuario)
);

create table usuario(
	idUsuario int primary key auto_increment,
    nome varchar(45) not null,
    email varchar(60) not null unique,
    senha varchar(20) not null,
    dtNasc DATE not null, 
    sexo varchar(9),
    bandaFav varchar(30),
    estiloFav varchar(30),
    imagem_perfil varchar(255) DEFAULT 'semFoto'
);

insert into usuario (nome, email, senha, dtNasc, bandaFav, estiloFav) values ('pessoa', 'pessoa@gmail.com', 'qualquercoisa', current_timestamp());

select
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'AC' AND bandaFav = 'Rock' ) as AC,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'AL' AND bandaFav = 'Rock') as AL,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'AP' AND bandaFav = 'Rock') as AP,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'AM' AND bandaFav = 'Rock') as AM,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'BA' AND bandaFav = 'Rock') as BA,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'CE' AND bandaFav = 'Rock') as CE,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'DF' AND bandaFav = 'Rock') as DF,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'ES' AND bandaFav = 'Rock') as ES,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'GO' AND bandaFav = 'Rock') as GO,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'MA' AND bandaFav = 'Rock') as MA,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'MT' AND bandaFav = 'Rock') as MT,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'MS' AND bandaFav = 'Rock') as MS,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'MG' AND bandaFav = 'Rock') as MG,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'PA' AND bandaFav = 'Rock') as PA,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'PB' AND bandaFav = 'Rock') as PB,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'PR' AND bandaFav = 'Rock') as PR,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'PE' AND bandaFav = 'Rock') as PE,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'PI' AND bandaFav = 'Rock') as PI,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'RJ' AND bandaFav = 'Rock') as RJ,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'RN' AND bandaFav = 'Rock') as RN,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'RS' AND bandaFav = 'Rock') as RS,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'RO' AND bandaFav = 'Rock') as RO,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'RR' AND bandaFav = 'Rock') as RR,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'SC' AND bandaFav = 'Rock') as SC,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'SP' AND bandaFav = 'Rock') as SP,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'SE' AND bandaFav = 'Rock') as SE,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'RN' AND bandaFav = 'Rock') as RN,
	(select count(estado) from endereco join usuario on fkUser = idUsuario where estado = 'TO' AND bandaFav = 'Rock') as 'TO'
		from endereco limit 1;

	
select 
	(select count(sexo) from usuario where sexo = 'outros') as Outros,
	(select count(sexo) from usuario where sexo = 'Masculino') as Masculino,
	(select count(sexo) from usuario where sexo = 'Feminimo') as Feminimo
		from usuario limit 1;

insert into endereco values(null, '21670170', 'Rio de Janeiro', 'RJ', 'Rua Operária', 12);
insert into usuario (nome, email, senha, dtNasc, sexo, bandaFav, estiloFav)values('Romar', 'romar@gmail.com','Romar@123', current_timestamp(), 'Masculino','metalica', 'Rock');
update usuario set sexo = 'outros' where idUsuario = 12;
select * from usuario;
select * from endereco;
