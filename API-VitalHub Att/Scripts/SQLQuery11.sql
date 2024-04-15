SELECT TOP (1000) [ID]
      ,[TipoUsuario]
  FROM [VitalHub].[dbo].[TiposUsuario]

DELETE FROM [TiposUsuario]
WHERE [ID] = 'C9908B7E-4E8A-41ED-8413-BE2B5AE73016'

UPDATE [VitalHub].[dbo].[TiposUsuario]
SET [TipoUsuario] = 'Pacientes'
WHERE [ID] = '41BA08AE-915B-4913-B3EB-45A19E8172E0'
