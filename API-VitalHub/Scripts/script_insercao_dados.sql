USE VitalHub_G12M;

-- Selecionando todos os endereços
SELECT * FROM dbo.Enderecos;

INSERT INTO
	dbo.Enderecos
VALUES
	(NEWID(), '09510200', 'Rua Niterói', 180, -23.5505, -46.6333);



-- Selecionando todos os tipos de usuários
SELECT * FROM dbo.TiposUsuario;

INSERT INTO dbo.TiposUsuario VALUES (NEWID(), 'Medico'), (NEWID(), 'Paciente');



-- Selecionando todos os usuários
SELECT * FROM dbo.Usuarios;

INSERT INTO
	dbo.Usuarios
VALUES
	(NEWID(), '59DA6BD8-81EA-4D52-9A40-10EB4984A6B1', 'Lucas Silveira Portal', 'lucas.portal@gmail.com', 'medico123', 'string'),
	(NEWID(), '59DA6BD8-81EA-4D52-9A40-10EB4984A6B1', 'Carlos Roque', 'carlos.roque@gmail.com', 'medico123', 'string'),
	(NEWID(), 'B7AC9BB8-2371-4020-9A8C-4A654B09F39A', 'Martin Lorenzo', 'martin_ferreira@gmail.com', 'paciente123', 'string'),
	(NEWID(), 'B7AC9BB8-2371-4020-9A8C-4A654B09F39A', 'Heitor Paulo Campos', 'heitor-campos80@gmail.com', 'paciente123', 'string');

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
	('2C811137-A0A9-4B8F-964C-81AF998B750D', '2D17053F-B24D-4BBD-B4B9-95DB3F3FE919', '123456789',  'CB9F3FFF-AE17-41DF-ADC0-E6122541A1B3'),
	('022E2563-3937-46A8-A081-AE82E36200CB', '2D17053F-B24D-4BBD-B4B9-95DB3F3FE919', '987654321',  'CB9F3FFF-AE17-41DF-ADC0-E6122541A1B3');



-- Selecionando todos os pacientes
SELECT * FROM dbo.Pacientes;

INSERT INTO
	dbo.Pacientes
VALUES
	('3A866547-D596-4885-9987-1AF4B12E227C', '2000-01-01', '391166037', '01318181801', 'CB9F3FFF-AE17-41DF-ADC0-E6122541A1B3'),
	('9C06C9A4-8F36-45DE-B9A7-C5FE3448A753', '2001-02-02', '473972438', '25319361815', 'CB9F3FFF-AE17-41DF-ADC0-E6122541A1B3');



-- Selecionando todos os niveis
SELECT * FROM dbo.NiveisPrioridade;

INSERT INTO 
	dbo.NiveisPrioridade
VALUES
	(NEWID(), 0), -- Rotina
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
	(NEWID(), 'Clínica Médica Vida & Saúde', '12345678000190', 'Clínica Médica Vida & Saúde','clinica.vidasaude@gmail.com','CB9F3FFF-AE17-41DF-ADC0-E6122541A1B3'),
	(NEWID(), 'Centro Médico São Paulo', '23456789000101', 'Centro Médico São Paulo','medico.saopaulo@gmail.com','CB9F3FFF-AE17-41DF-ADC0-E6122541A1B3');
