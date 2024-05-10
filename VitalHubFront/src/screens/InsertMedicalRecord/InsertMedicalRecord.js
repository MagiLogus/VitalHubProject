import { ScrollView, StatusBar } from "react-native";
import { Button, ButtonTitle } from "../../components/Button/Style";
import { AgeContainer, Container, ImageContainer, ScrollViewContainer } from "../../components/Container/Style";
import { InputWithTitle } from "../../components/InputWithTitle/InputWithTitle";
import { InputWithTitleMedium } from "../../components/InputWithTitleMedium/InputWithTitleMedium";
import { LinkAction } from "../../components/Links/Style";
import { AgeTitle, EmailTitle, Title } from "../../components/Title/Style";
import { useEffect, useState } from "react";
import { api } from "../../service/service";
import { differenceInYears, format } from 'date-fns';

export function InsertMedicalRecord({ navigation, route }) {

    const { appointmentId } = route.params;
    const [appointment, setAppointment] = useState([]);
    const [medicamento, setMedicamento] = useState('');
    const [descricao, setDescricao] = useState('');
    const [diagnostico, setDiagnostico] = useState('');

    useEffect(() => {

        console.log(appointmentId);

    }, []);

    useEffect(() => {
        if (appointmentId) {
            searchAppointment();
        }
    }, [appointmentId]);

    async function searchAppointment() {
        try {
            const response = await api.get(`/Consultas/BuscarPorId?id=${appointmentId}`);
            setAppointment(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function handleRegister() {
        await api.post('/Consultas/Prontuario', {
            consultaId: appointmentId,
            medicamento: medicamento,
            descricao: descricao,
            diagnostico: diagnostico,
        }).then(async response => {
            console.log(response);
            navigation.replace('Main');
        }).catch(error => {
            console.log(error);
        })
    };

    async function Main() {
        navigation.replace("Main");
    }

    if (appointment.length === 0) {
        return null;
    }

    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageContainer source={{ uri: appointment.paciente.idNavigation.foto }} />
            <ScrollViewContainer>
                <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false} overScrollMode="never">
                    <Title>{appointment.paciente.idNavigation.nome}</Title>
                    <AgeContainer>
                        <AgeTitle>{differenceInYears(new Date(), new Date(appointment.paciente.dataNascimento))} ano(s)</AgeTitle>
                        <EmailTitle>{appointment.paciente.idNavigation.email}</EmailTitle>
                    </AgeContainer>
                    <InputWithTitle title={"Descrição da consulta"} placeholder={"Descrição"} onChangeText={(txt) => setDescricao(txt)} />
                    <InputWithTitleMedium title={"Diagnóstico do paciente"} placeholder={"Diagnóstico"} onChangeText={(txt) => setDiagnostico(txt)} />
                    <InputWithTitle title={"Prescrição médica"} placeholder={"Prescrição"} onChangeText={(txt) => setMedicamento(txt)} />
                    <Button onPress={handleRegister}>
                        <ButtonTitle>Salvar</ButtonTitle>
                    </Button>
                    <LinkAction onPress={Main}>Voltar</LinkAction>
                </ScrollView>
            </ScrollViewContainer>
        </Container>

    );
};