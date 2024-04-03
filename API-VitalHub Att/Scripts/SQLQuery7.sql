SELECT TOP (1000) [ID]
      ,[ClinicaID]
      ,[MedicoID]
  FROM [VitalHub].[dbo].[MedicosClinicas]

  INSERT INTO [MedicosClinicas] ([ID], [ClinicaID], [MedicoID])
VALUES
    (NEWID(), 'B3FC583A-4D7B-437F-8F12-0DFD887598FE', 'F81F06E5-1F29-4F2F-827A-1A42EDFEBE55');