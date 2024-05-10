import { Modal } from "react-native";
import { AppointmentContent, ModalContent, ModalImage, RowTextModal, TextModal, Title } from "./Style";
import { ButtonCancel, ButtonModal, ButtonSecondaryTitle, ButtonTitle } from "../Button/Style";

export const AppointmentModal = ({ navigation, appointmentId, clinicId, name, age, email, imageSource, visible, setShowModalAppointment, situacao, profile, speciality, crm, ...rest }) => {

    async function ConsultationLocal() {
        navigation.replace("ConsultationLocal", { clinicId: clinicId });
    }

    async function InsertMedicalRecord() {
        navigation.replace("InsertMedicalRecord", { appointmentId: appointmentId });
    }

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType='fade'>
            <AppointmentContent>
                <ModalContent>
                    <ModalImage src={imageSource} />
                    <Title>{profile === "Medico" ? "Dr(a). " : ""}{name}</Title>
                    <RowTextModal>
                        {profile === 'Medico' ? (
                            <TextModal>{speciality}</TextModal>
                        ) : (
                            <TextModal>{age} Ano(s)</TextModal>
                        )}
                        {profile === 'Medico' ? (
                            <TextModal>CRM-{crm}</TextModal>
                        ) : (
                            <TextModal>{email}</TextModal>
                        )}
                    </RowTextModal>
                    {situacao !== "Cancelados" && (
                        <ButtonModal>
                            {profile === 'Medico' ? (
                                <ButtonTitle onPress={ConsultationLocal}>Ver local da consulta</ButtonTitle>
                            ) : (
                                <ButtonTitle onPress={InsertMedicalRecord}>Inserir Prontuário</ButtonTitle>
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