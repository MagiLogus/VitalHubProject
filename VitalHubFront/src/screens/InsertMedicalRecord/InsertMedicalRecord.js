import { ScrollView, StatusBar } from "react-native";
import { Button, ButtonTitle } from "../../components/Button/Style";
import { AgeContainer, Container, ImageContainer, ScrollViewContainer } from "../../components/Container/Style";
import { InputWithTitle } from "../../components/InputWithTitle/InputWithTitle";
import { InputWithTitleMedium } from "../../components/InputWithTitleMedium/InputWithTitleMedium";
import { LinkAction } from "../../components/Links/Style";
import { AgeTitle, EmailTitle, Title } from "../../components/Title/Style";

export function InsertMedicalRecord({ navigation }) {

    async function Main() {
        navigation.replace("Main");
    }

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
                    <InputWithTitle title={"Descrição da consulta"} placeholder={"Descrição"} />
                    <InputWithTitleMedium title={"Diagnóstico do paciente"} placeholder={"Diagnóstico"} />
                    <InputWithTitle title={"Prescrição médica"} placeholder={"Prescrição"} />
                    <Button>
                        <ButtonTitle>Salvar</ButtonTitle>
                    </Button>
                    <Button>
                        <ButtonTitle>Editar</ButtonTitle>
                    </Button>
                    <LinkAction onPress={Main}>Voltar</LinkAction>
                </ScrollView>
            </ScrollViewContainer>
        </Container>

    );
};