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


  INSERT INTO [Consultas] ([ID], [SituacaoID], [PacienteID], [MedicoClinicaID], [ReceitaID], [PrioridadeID], [DataConsulta], [Descricao], [Diagnostico])
VALUES
    (NEWID(), 'DE697051-282B-4908-B5BB-1673D369BAAB', '5D5F1311-8F9C-4291-9137-C44387EB85DE','8E1E2D1B-8AF2-49AF-B03F-D3A8858A05D3', '4306A1AA-EA88-4183-8319-96128398C3F9', '41D3CB18-6013-4E7C-9CBA-D168A306D7F7', '2024-04-02', 'Rotina', 'Nenhum diagnóstico');
