import { ScrollView, StatusBar } from "react-native";
import { Button } from "../../components/Button/Style";
import { AgeContainer, Container, ImageContainer, ScrollViewContainer, TextBoxArea, TextBoxContainer } from "../../components/Container/Style";
import { AgeTitle, ButtonTitle, EmailTitle, TextBoxText, TextBoxTitle, Title } from "../../components/Title/Style";
import { LinkAction } from "../../components/Links/Style";
import { api } from "../../service/service";
import { useEffect, useState } from "react";
import { differenceInYears, format } from 'date-fns';

export const ConfirmMedicalRecord = ({ navigation, route }) => {
    const { appointmentId } = route.params;
    const [appointment, setAppointment] = useState([]);

    async function searchAppointment() {
        try {
            const response = await api.get(`/Consultas/BuscarPorId?id=${appointmentId}`);
            setAppointment(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (appointmentId) {
            searchAppointment();
            console.log(route.params);
        }
    }, [appointmentId]);

    async function Main() {
        navigation.replace("Main");
    }

    async function Edit() {
        navigation.replace("InsertMedicalRecord", {appointmentId: appointmentId});
    }

    if (appointment.length === 0) {
        return null;
    }

    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageContainer source={{uri: appointment.paciente.idNavigation.foto}} />
            <ScrollViewContainer>
                <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false} overScrollMode="never">
                    <Title>{appointment.paciente.idNavigation.nome}</Title>
                    <AgeContainer>
                        <AgeTitle>{differenceInYears(new Date(), new Date(appointment.paciente.dataNascimento))} Ano(s)</AgeTitle>
                        <EmailTitle>{appointment.paciente.idNavigation.email}</EmailTitle>
                    </AgeContainer>
                    <TextBoxContainer>
                        <TextBoxTitle>Descrição da consulta</TextBoxTitle>
                        <TextBoxArea>
                            <TextBoxText>{appointment.descricao}</TextBoxText>
                        </TextBoxArea>
                    </TextBoxContainer>
                    <TextBoxContainer>
                        <TextBoxTitle>Diagnóstico do paciente</TextBoxTitle>
                        <TextBoxArea>
                            <TextBoxText>{appointment.diagnostico}</TextBoxText>
                        </TextBoxArea>
                    </TextBoxContainer>
                    <TextBoxContainer>
                        <TextBoxTitle>Prescrição médica</TextBoxTitle>
                        <TextBoxArea>
                            <TextBoxText>{appointment.receita.medicamento}</TextBoxText>
                        </TextBoxArea>
                    </TextBoxContainer>
                    <Button onPress={Edit}>
                        <ButtonTitle>Editar</ButtonTitle>
                    </Button>
                    <LinkAction onPress={Main}>Voltar</LinkAction>
                </ScrollView>
            </ScrollViewContainer>

        </Container>
    );
};