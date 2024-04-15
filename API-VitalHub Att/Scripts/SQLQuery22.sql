SELECT TOP (1000) [ID]
      ,[SituacaoID]
      ,[PacienteID]
      ,[MedicoClinicaID]
      ,[ReceitaID]
      ,[PrioridadeID]
      ,[DataConsulta]
      ,[Descricao]
      ,[Diagnostico]
  FROM [VitalHub].[dbo].[Consultas]


  DELETE FROM [Consultas]
WHERE [ID] = '1581747C-E0AC-4755-8380-0712646B98F0
'