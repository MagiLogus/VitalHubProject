SELECT TOP (1000) [ID]
      ,[ClinicaID]
      ,[MedicoID]
  FROM [VitalHub].[dbo].[MedicosClinicas]

  INSERT INTO [MedicosClinicas] ([ID], [ClinicaID], [MedicoID])
VALUES
    (NEWID(), 'FADC4A38-7477-459C-BDE0-4BE16DD4A771', '8639AFE2-A8BB-42A0-B9F8-0A200724FCC2');