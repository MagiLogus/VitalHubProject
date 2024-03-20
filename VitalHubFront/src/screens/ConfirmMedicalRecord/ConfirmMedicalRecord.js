import { ScrollView, StatusBar } from "react-native";
import { Button } from "../../components/Button/Style";
import { AgeContainer, Container, ImageContainer, ScrollViewContainer, TextBoxArea, TextBoxContainer } from "../../components/Container/Style";
import { AgeTitle, ButtonTitle, EmailTitle, TextBoxText, TextBoxTitle, Title } from "../../components/Title/Style";
import { LinkAction } from "../../components/Links/Style";

export const ConfirmMedicalRecord = () => {
    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageContainer source={require("../../assets/images/user_profile.png")} />
            <ScrollViewContainer>
                <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false} overScrollMode="never">
                    <Title>Richard Kosta</Title>
                    <AgeContainer>
                        <AgeTitle>22 Anos</AgeTitle>
                        <EmailTitle>richard.kosta@gmail.com</EmailTitle>
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
                    <Button>
                        <ButtonTitle>Salvar</ButtonTitle>
                    </Button>
                    <Button>
                        <ButtonTitle>Editar</ButtonTitle>
                    </Button>
                    <LinkAction>Cancelar</LinkAction>
                </ScrollView>
            </ScrollViewContainer>

        </Container>
    );
};