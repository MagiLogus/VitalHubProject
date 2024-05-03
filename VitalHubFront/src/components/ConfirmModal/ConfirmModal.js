import { Modal } from "react-native";
import { ButtonModalDoctor, ButtonTitleDoctor, ContainerConfirm2, ContainerConfirm3, ContainerTextConfirm, ConteinerConfirm, ContentAccount, LinkAccount, ModalContent2, TextConfirm, TextConfirm2, TextConfirm3, TextInfo } from './style';
import moment from "moment/moment";
import { userDecodeToken } from "../../utils/Auth";
import { useEffect, useState } from "react";
import { api } from "../../service/service";

export const ConfirmModal = ({
    visible,
    navigation,
    setShowModalConfirm,
    agendamento,
    ...rest
}) => {

    const [profile, setProfile] = useState([]);

    async function Confirm() {
        await api.post('/Consultas/Cadastrar', {
            pacienteId: profile.id,
            situacaoId: '63DAE581-3CE9-4A4F-AD08-E52A30770355',
            medicoClinicaId: agendamento.medicoClinicaId,
            prioridadeId: agendamento.prioridadeId,
            dataConsulta: agendamento.dataConsulta,
        }).then(async response => {
            console.log(response);
            navigation.replace('Main');
        }).catch(error => {
            console.log(error);
        })
    };

    async function ProfileLoad() {
        const token = await userDecodeToken();

        if (token) {
            setProfile(token)
        }
    };

    useEffect(() => {
        ProfileLoad();
    }, []);

    return (
        <Modal
            {...rest}
            visible={visible}
            transparent={true}
            animationType="fade"
        >
            <ConteinerConfirm>
                <ModalContent2>
                    <ContainerTextConfirm>
                        <TextConfirm>Agendar consulta</TextConfirm>
                        <TextConfirm2>
                            Consulte os dados selecionados para a sua consulta
                        </TextConfirm2>
                    </ContainerTextConfirm>
                    <ContainerConfirm2>
                        <ContainerConfirm3>
                            <TextConfirm3>Data da consulta</TextConfirm3>
                            <TextInfo>{moment(agendamento.dataConsulta).format('DD [de] MMMM [de] YYYY [às] HH:mm')}</TextInfo>
                        </ContainerConfirm3>
                        <ContainerConfirm3>
                            <TextConfirm3>Médico(a) da consulta</TextConfirm3>
                            <TextInfo>{agendamento.medicoLabel}, {agendamento.medicoEsp}</TextInfo>
                        </ContainerConfirm3>
                        <ContainerConfirm3>
                            <TextConfirm3>Local da consulta</TextConfirm3>
                            <TextInfo>{agendamento.clinicaCidade}, {agendamento.clinicaEstado}</TextInfo>
                        </ContainerConfirm3>
                        <ContainerConfirm3>
                            <TextConfirm3>Tipo da consulta</TextConfirm3>
                            <TextInfo>{agendamento.prioridadeLabel}</TextInfo>
                        </ContainerConfirm3>
                    </ContainerConfirm2>
                    <ButtonModalDoctor onPress={Confirm}>
                        <ButtonTitleDoctor>Confirmar</ButtonTitleDoctor>
                    </ButtonModalDoctor>
                    <ContentAccount onPress={setShowModalConfirm}>
                        <LinkAccount>Cancelar</LinkAccount>
                    </ContentAccount>
                </ModalContent2>
            </ConteinerConfirm>
        </Modal>
    );
};
