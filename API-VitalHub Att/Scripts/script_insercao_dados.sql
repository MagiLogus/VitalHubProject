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
	(NEWID(), 'D0C61D54-7B16-4E16-9D22-095022DF5D69', 'Lucas Silveira Portal', 'lucas.portal@gmail.com', 'medico123', 'string'),
	(NEWID(), 'D0C61D54-7B16-4E16-9D22-095022DF5D69', 'Carlos Roque', 'carlos.roque@gmail.com', 'medico123', 'string'),
	(NEWID(), '8BFCC7C1-562F-4D54-97C8-E05B1A866B0D', 'Martin Lorenzo', 'martin_ferreira@gmail.com', 'paciente123', 'string'),
	(NEWID(), '8BFCC7C1-562F-4D54-97C8-E05B1A866B0D', 'Heitor Paulo Campos', 'heitor-campos80@gmail.com', 'paciente123', 'string');

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
	('BFB435C6-D1AF-49B6-BC80-1E40E0590BAD', '54CC1923-1522-4E7A-9616-0A5E7C623750', '123456789', 'BDB0B156-4C77-4F6D-BF7C-BCFAE0024FEF'),
	('D4024320-4FD4-4ECC-AB71-459B3661034E', '54CC1923-1522-4E7A-9616-0A5E7C623750', '987654321', 'BDB0B156-4C77-4F6D-BF7C-BCFAE0024FEF');



-- Selecionando todos os pacientes
SELECT * FROM dbo.Pacientes;

INSERT INTO
	dbo.Pacientes
VALUES
	('A4E8DC45-4156-4348-9AF7-098C4DECE9A2', '2000-01-01', '391166037', '01318181801', 'BDB0B156-4C77-4F6D-BF7C-BCFAE0024FEF'),
	('473F48A9-CDA5-480C-BF50-330E1B5F93AE', '2001-02-02', '473972438', '25319361815', 'BDB0B156-4C77-4F6D-BF7C-BCFAE0024FEF');



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
	(NEWID(), 'Clínica Médica Vida & Saúde', '12345678000190', 'Clínica Médica Vida & Saúde', 'clinica.vidasaude@gmail.com', 'BDB0B156-4C77-4F6D-BF7C-BCFAE0024FEF'),
	(NEWID(), 'Centro Médico São Paulo', '23456789000101', 'Centro Médico São Paulo', 'medico.saopaulo@gmail.com', 'BDB0B156-4C77-4F6D-BF7C-BCFAE0024FEF');
