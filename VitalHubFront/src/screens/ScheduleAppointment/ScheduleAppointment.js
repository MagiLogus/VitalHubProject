import { Modal } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { useEffect, useState } from 'react'
import { ModalContent, ViewContainer, Title, Label, Input, ViewOption, InputCheckbox, TextInputCheckbox } from '../../screens/ScheduleAppointment/Style'
import { Button } from '../../components/Button/Style'
import { ButtonTitle } from '../../components/Title/Style'
import { LinkAction } from '../../components/Links/Style'
import { IconSelect, SelectPicker } from '../SelectDate/Style'


const types = [
  { id: 'C5A9FDAD-4191-4BDD-A9B0-18D2D0FEAB55', tipo: 'Rotina' },
  { id: '41D3CB18-6013-4E7C-9CBA-D168A306D7F7', tipo: 'Exame' },
  { id: 'CA540D01-7E9E-47C8-A9BE-718147F9D15F', tipo: 'Urgência' }
]

const location = [
  { label: "São Caetano do Sul", value: "São Caetano do Sul" },
  { label: "São Bernardo do Campo", value: "São Bernardo do Campo" },
  { label: "Diadema", value: "Diadema" },
  { label: "Santo André", value: "Santo André" }
];

export const ScheduleAppointment = ({ navigation, visible = true, setShowModalAgendamento, ...rest }) => {
  const [tipoConsulta, setTipoConsulta] = useState('Rotina')

  async function handleContinue() {
    await setShowModalAgendamento(false)
    navigation.replace("SelectClinic", { agendamento: agendamento })
  }

  const [agendamento, setAgendamento] = useState({ prioridadeId: 'C5A9FDAD-4191-4BDD-A9B0-18D2D0FEAB55', prioridadeLabel: 'Rotina' });

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType='fade' animationOutTiming={0}>
      <ModalContent>
        <ViewContainer>

          <Title>Agendar Consulta</Title>

          <Label>Qual o nível da consulta:</Label>
          <ViewOption>
            {
              types.map((item) => {
                return (
                  <InputCheckbox id={item.id}
                    key={item.id}
                    onPress={e => {
                      setTipoConsulta(item.tipo);
                      setAgendamento({ ...agendamento, prioridadeId: item.id, prioridadeLabel: item.tipo });
                    }}
                    optionSelected={tipoConsulta == item.tipo ? true : false}
                  >
                    <TextInputCheckbox optionSelected={tipoConsulta == item.tipo ? true : false}>
                      {item.tipo}
                    </TextInputCheckbox>
                  </InputCheckbox>
                )
              })
            }
          </ViewOption>

          <Label>Qual a localização desejada:</Label>
          <SelectPicker style={{ width: '90%', marginTop: 10 }}>
            <RNPickerSelect
              onValueChange={(value) => setAgendamento({ ...agendamento, localizacao: value })}
              items={location}
              placeholder={{ label: 'Selecionar localização', value: null }}
              value={agendamento}
              style={{
                inputAndroid: {
                  color: '#34898F',
                  fontFamily: 'MontserratAlternates_600SemiBold',
                  fontSize: 14,
                },
              }}
              Icon={() => {
                return <IconSelect />;
              }}
            />
          </SelectPicker>

          <Button width={"90%"} onPress={() => handleContinue()}>
            <ButtonTitle>Continuar</ButtonTitle>
          </Button>

          <LinkAction onPress={e => setShowModalAgendamento(false)}>Cancelar</LinkAction>

        </ViewContainer>
      </ModalContent>
    </Modal>
  )
}

