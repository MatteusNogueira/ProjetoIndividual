use aquatech;

select * from usuario;

create database druming;

use druming;

create table endereco (
	idEndereco int primary key auto_increment,
    cep char(8),
    numero int,
    complemento varchar(30),
    fkUser int, 
    constraint fkU foreign key (fkUser) references usuario(idUsuario)
);

create table usuario(
	idUsuario int primary key auto_increment,
    nome varchar(45) not null,
    email varchar(60) not null,
    senha varchar(20) not null,
    dtNasc DATE not null, 
    sexo varchar(9),
    marcaBatFav varchar(30),
    marcaBaqFav varchar(30),
    estiloFav varchar(30)
);
update usuario set email = 'matteus@gmail.com' where idUsuario = 3;
select * from usuario;