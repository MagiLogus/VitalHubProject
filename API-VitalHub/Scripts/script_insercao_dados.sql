USE VitalHub;

-- Selecionando todos os endereços
SELECT * FROM dbo.Enderecos;

INSERT INTO
	dbo.Enderecos
VALUES
	(NEWID(), '09510200','Rua Niterói', 180, '-23.6902013', '-46.5882767' );



-- Selecionando todos os tipos de usuários
SELECT * FROM dbo.TiposUsuario;

INSERT INTO dbo.TiposUsuario VALUES (NEWID(), 'Medico'), (NEWID(), 'Paciente');



-- Selecionando todos os usuários
SELECT * FROM dbo.Usuarios;

INSERT INTO
	dbo.Usuarios
VALUES
	(NEWID(), '0D1091D7-7BE1-4A4D-AF01-8DAA0B9D8920', 'Lucas Silveira Portal', 'lucas.portal@gmail.com', 'medico123', 'string'),
	(NEWID(), '0D1091D7-7BE1-4A4D-AF01-8DAA0B9D8920', 'Carlos Roque', 'carlos.roque@gmail.com', 'medico123', 'string'),
	(NEWID(), '41BA08AE-915B-4913-B3EB-45A19E8172E0', 'Martin Lorenzo', 'martin_ferreira@gmail.com', 'paciente123', 'string'),
	(NEWID(), '41BA08AE-915B-4913-B3EB-45A19E8172E0', 'Heitor Paulo Campos', 'heitor-campos80@gmail.com', 'paciente123', 'string');

UPDATE dbo.Usuarios SET senha = '$2y$10$kZROpWHidaGEbQdfvq3SpeVPGiNcpLQHAOcENJbblYV0aAqXoHnYO' WHERE id = 'F63A83C9-35C7-4BDE-940D-5B07303D8F02';


-- Selecionando todas as especialidades
SELECT * FROM dbo.Especialidades;

INSERT INTO
	dbo.Especialidades
VALUES
	(NEWID(), 'Pediatra');



-- Selecionando todos os médicos
SELECT * FROM dbo.Medicos;

INSERT INTO
	dbo.Medicos
VALUES
	('F81F06E5-1F29-4F2F-827A-1A42EDFEBE55', '394DFAA3-EE7E-4B97-B283-0AEFB3344852', '123456789', 'BB5AB9BF-57A8-46D7-980B-CC25048ABBFF'),
	('6870A170-16BC-4EA8-8866-DF3605904BD3', '394DFAA3-EE7E-4B97-B283-0AEFB3344852', '987654321', 'BB5AB9BF-57A8-46D7-980B-CC25048ABBFF');



-- Selecionando todos os pacientes
SELECT * FROM dbo.Pacientes;

INSERT INTO
	dbo.Pacientes
VALUES
	('9E57A73B-0DF5-4A64-8BAA-282EBCA2D22D', '2000-01-01', '391166037', '01318181801', 'BB5AB9BF-57A8-46D7-980B-CC25048ABBFF'),
	('83551E86-847F-4E3B-A915-2FA76252D610', '2001-02-02', '473972438', '25319361815', 'BB5AB9BF-57A8-46D7-980B-CC25048ABBFF');



-- Selecionando todos os niveis
SELECT * FROM dbo.NiveisPrioridade;

INSERT INTO 
	dbo.NiveisPrioridade
VALUES
	(NEWID(), 0), --Rotina
	(NEWID(), 1), -- Exame
	(NEWID(), 2); -- Urgencia



-- Selecionando todas as situasões
SELECT * FROM dbo.Situacoes;

INSERT INTO
	dbo.Situacoes
VALUES
	(NEWID(), 'Pendentes'),
	(NEWID(), 'Realizados'),
	(NEWID(), 'Cancelados');



-- Selecionando todas as clínicas
SELECT * FROM dbo.Clinicas;

INSERT INTO
	dbo.Clinicas
VALUES
	(NEWID(), 'Clínica Médica Vida & Saúde', '12345678000190', 'Clínica Médica Vida & Saúde', 'clinica.vidasaude@gmail.com', 'BB5AB9BF-57A8-46D7-980B-CC25048ABBFF'),
	(NEWID(), 'Centro Médico São Paulo', '23456789000101', 'Centro Médico São Paulo', 'medico.saopaulo@gmail.com', 'BB5AB9BF-57A8-46D7-980B-CC25048ABBFF');
