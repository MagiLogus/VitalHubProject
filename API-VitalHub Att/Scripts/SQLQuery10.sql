SELECT TOP (1000) [ID]
      ,[Medicamento]
      ,[Observacoes]
  FROM [VitalHub].[dbo].[Receitas]

  INSERT INTO [Receitas] ([ID], [Medicamento], [Observacoes])
VALUES
    (NEWID(), 'Paracetamol', 'Tomar após as refeições');