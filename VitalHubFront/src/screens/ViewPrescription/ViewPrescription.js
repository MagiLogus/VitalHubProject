import { ScrollView, StatusBar } from "react-native";
import { ButtonImage } from "../../components/Button/Style";
import { AgeContainer, BoxAreaImage, ButtonContainer, Container, ImageContainer, ScrollViewContainer, TextBoxArea, TextBoxAreaImage, TextBoxContainer } from "../../components/Container/Style";
import { AgeTitle, ButtonTitle, EmailTitle, TextBoxText, TextBoxTitle, Title } from "../../components/Title/Style";
import { AttentionIcon, CameraIcon } from "../../components/Icons/Style";
import { LinkAction, LinkActionRed } from "../../components/Links/Style";
import { Line } from "../../components/Line/Style";
import { useState } from "react";
import ModalCamera from "../../components/CameraModal/CameraModal";

export const ViewPrescription = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [capturedImageUri, setCapturedImageUri] = useState(null);
    const [description, setDescription] = useState("");

    async function Main() {
        navigation.replace("Main");
    }

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleConfirm = (photo) => {
        setCapturedImageUri(photo);
        handleCloseModal();
    };

    async function InsertExam() {
        const formData = new FormData();
        formData.append("ConsultaId", prontuario.id);
        formData.append("Imagem", {
            uri: capturedImageUri,
            name: `image.${capturedImageUri.split(".").pop()}`,
            type: `image/${capturedImageUri.split(".").pop()}`
        }

        )
        await api.put(`/Exame/Cadastrar`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(response => {
            setDescription(description + "\n" + response.data.descricao)
        }).catch(error => {
            console.log(error);
        })
    }


    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageContainer source={require("../../assets/images/doctor_image.png")} />
            <ScrollViewContainer>
                <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false} overScrollMode="never">
                    <Title>Dr. Claudio</Title>
                    <AgeContainer>
                        <AgeTitle>Cliníco Geral</AgeTitle>
                        <EmailTitle>CRM-15286</EmailTitle>
                    </AgeContainer>
                    <TextBoxContainer>
                        <TextBoxTitle>Descrição da consulta</TextBoxTitle>
                        <TextBoxArea>
                            <TextBoxText>O paciente possuí uma infecção no
                                ouvido. Necessário repouse de 2 dias
                                e acompanhamento médico constante</TextBoxText>
                        </TextBoxArea>
                    </TextBoxContainer>
                    <TextBoxContainer>
                        <TextBoxTitle>Diagnóstico do paciente</TextBoxTitle>
                        <TextBoxArea>
                            <TextBoxText>Infecção no ouvido</TextBoxText>
                        </TextBoxArea>
                    </TextBoxContainer>
                    <TextBoxContainer>
                        <TextBoxTitle>Prescrição médica</TextBoxTitle>
                        <TextBoxArea>
                            <TextBoxText>Medicamento: Advil</TextBoxText>
                            <TextBoxText>Dosagem: 50mg</TextBoxText>
                            <TextBoxText>Frequência: 3 Vezes ao dia</TextBoxText>
                            <TextBoxText>Duração: 3 Dias</TextBoxText>
                        </TextBoxArea>
                    </TextBoxContainer>
                    <TextBoxContainer>
                        <TextBoxTitle>Exames médicos</TextBoxTitle>
                        <TextBoxAreaImage>
                            <BoxAreaImage>
                                <AttentionIcon />
                                <TextBoxText>Nenhuma foto informada</TextBoxText>
                            </BoxAreaImage>
                        </TextBoxAreaImage>
                    </TextBoxContainer>
                    <ButtonContainer>
                        <ButtonImage width={"50%"}>
                            <CameraIcon />
                            <ButtonTitle onPress={handleOpenModal}>Enviar</ButtonTitle>
                        </ButtonImage>
                        <LinkActionRed>Cancelar</LinkActionRed>
                    </ButtonContainer>
                    <Line />
                    <TextBoxContainer>
                        <TextBoxArea>
                            <TextBoxText>Resultado do exame de sangue :</TextBoxText>
                            <TextBoxText>tudo normal</TextBoxText>
                        </TextBoxArea>
                    </TextBoxContainer>
                    <LinkAction onPress={Main}>Voltar</LinkAction>
                </ScrollView>
                <ModalCamera
                    visible={modalVisible}
                    onClose={handleCloseModal}
                    title="Título do Modal"
                    onConfirm={handleConfirm}
                />
            </ScrollViewContainer>
        </Container>
    );
};