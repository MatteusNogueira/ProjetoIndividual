
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
    imagem_perfil varchar(255)
);

insert into usuario values (default, 'asdasd', 'asdj@gmail.com', 'alsojdnalsd', timestamp)

        
select * from usuario;
select * from endereco;
