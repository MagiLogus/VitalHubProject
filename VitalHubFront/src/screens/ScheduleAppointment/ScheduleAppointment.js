import { Modal } from 'react-native'

import { useEffect, useState } from 'react'
import { ModalContent, ViewContainer, Title, Label, Input, ViewOption, InputCheckbox, TextInputCheckbox } from '../../screens/ScheduleAppointment/Style'
import { Button } from '../../components/Button/Style'
import { ButtonTitle } from '../../components/Title/Style'
import { LinkAction } from '../../components/Links/Style'


const types = [
  { id: 0, tipo: 'Rotina' },
  { id: 1, tipo: 'Exame' },
  { id: 2, tipo: 'Urgência' }
]

export const ScheduleAppointment = ({ navigation, visible = true, setShowModalAgendamento, ...rest }) => {
  const [tipoConsulta, setTipoConsulta] = useState('')

  async function handleContinue() {
    await setShowModalAgendamento(false)
    navigation.replace("SelectDoctor")
  }

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
                  <InputCheckbox
                    key={item.id}
                    onPress={e => setTipoConsulta(item.tipo)}
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
          <Input placeholder='Informe a localização' />

          <Button width={"90%"} onPress={() => handleContinue()}>
            <ButtonTitle>Continuar</ButtonTitle>
          </Button>

          <LinkAction onPress={e => setShowModalAgendamento(false)}>Cancelar</LinkAction>

        </ViewContainer>
      </ModalContent>
    </Modal>
  )
}

