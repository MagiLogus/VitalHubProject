import { Modal } from "react-native";
import { AppointmentContent, ModalContent, ModalImage, RowTextModal, TextModal, Title } from "./Style";
import { ButtonCancel, ButtonModal, ButtonSecondaryTitle, ButtonTitle } from "../Button/Style";

export const AppointmentModal = ({ navigation, name, age, email, imageSource, visible, setShowModalAppointment, situacao, profile, speciality, crm, ...rest }) => {

    async function ConsultationLocal() {
        navigation.replace("ConsultationLocal");
    }

    async function InsertMedicalRecord() {
        navigation.replace("InsertMedicalRecord");
    }

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType='fade'>
            <AppointmentContent>
                <ModalContent>
                    <ModalImage src={imageSource} />
                    <Title>{profile === "Médico" ? "Dr(a). " : ""}{name}</Title>
                    <RowTextModal>
                        {profile === 'Médico' ? (
                            <TextModal>{speciality}</TextModal>
                        ) : (
                            <TextModal>{age} Ano(s)</TextModal>
                        )}
                        {profile === 'Médico' ? (
                            <TextModal>{crm}</TextModal>
                        ) : (
                            <TextModal>{email}</TextModal>
                        )}
                    </RowTextModal>


                    {situacao !== "cancelado" && ( // Verifica se a situação não está cancelada
                        <ButtonModal>
                            {profile === 'Médico' ? ( // Verifica o tipo de perfil
                                <ButtonTitle onPress={ConsultationLocal}>Ver local da consulta</ButtonTitle> // Botão para médico
                            ) : (
                                <ButtonTitle onPress={InsertMedicalRecord}>Inserir Prontuário</ButtonTitle> // Botão para paciente
                            )}
                        </ButtonModal>
                    )}
                    <ButtonCancel onPress={() => setShowModalAppointment(false)}>
                        <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                    </ButtonCancel>
                </ModalContent>
            </AppointmentContent>
        </Modal>
    );
};