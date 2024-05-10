import { Modal } from "react-native";
import { Title } from "../Title/Style";
import { Button, ButtonSecondary, ButtonSecondaryTitle, ButtonTitle } from "../Button/Style";
import { ModalContent, ModalText, PatientModal } from "./Style";

export const CancellationModal = ({ visible, onPressHandleCancel, setShowModalCancel, ...rest }) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        <ModalContent>
          <Title>Cancelar consulta</Title>
          <ModalText>
            Ao cancelar essa consulta, abrirá uma possível disponibilidade no
            seu horário, deseja mesmo cancelar essa consulta?
          </ModalText>
          <Button width={"80%"} onPress={onPressHandleCancel}>
            <ButtonTitle>Confirmar</ButtonTitle>
          </Button>
          <ButtonSecondary onPress={() => setShowModalCancel(false)}>
            <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
          </ButtonSecondary>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};