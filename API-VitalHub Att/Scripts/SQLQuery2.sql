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
    (NEWID(), '1FA3F2B2-883A-4FFE-BCB0-149E49764BD4', 'DF537D19-FF32-4A92-80B9-A3992F26DDEB','EAD3C820-15BC-40B6-9518-BD5B8A1CCA7A', '3751B2F6-C2F4-4032-B96B-AEFA906073B2', '5E97D1C6-7751-456D-8F1A-B506F461A90D', '2024-04-02', 'Rotina', 'Nenhum diagnóstico');
