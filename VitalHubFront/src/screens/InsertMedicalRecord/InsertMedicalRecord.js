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
import { Input } from "../ScheduleAppointment/Style";
import { TitleWithInput } from "../SelectDate/Style";

export function InsertMedicalRecord({ navigation, route }) {

    const { appointmentId } = route.params;
    const [appointment, setAppointment] = useState([]);
    const [medicamento, setMedicamento] = useState('');
    const [descricao, setDescricao] = useState('');
    const [diagnostico, setDiagnostico] = useState('');
    const [reload, setReload] = useState(false);

    useEffect(() => {

        console.log(appointmentId);

    }, []);

    useEffect(() => {
        if (appointmentId) {
            searchAppointment();
        }
    }, [appointmentId, reload]);

    async function searchAppointment() {
        try {
            const response = await api.get(`/Consultas/BuscarPorId?id=${appointmentId}`);
            setAppointment(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function handleRegister() {
        const formData = new FormData();
        formData.append('ConsultaId', appointmentId);
        formData.append('Medicamento', medicamento);
        formData.append('Descricao', descricao);
        formData.append('Diagnostico', diagnostico);

        try {
            const response = await api.put('/Consultas/Prontuario', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'accept': '*/*'
                }
            });
            console.log(`${medicamento}, ${descricao}, ${diagnostico}`);
            console.log(response);
            onPressHandleCancel();

        } catch (error) {
            console.log(error);
        }
    };

    async function onPressHandleCancel() {
        await api.put(`/Consultas/Status?idConsulta=${appointmentId}&status=Realizados`)
            .then(response => {
                console.log(response.data);
                setReload(prevState => !prevState);
                navigation.replace('Main');
            }).catch(error => {
                console.log(error);
            })
    }

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
                    <TitleWithInput>Descrição da consulta</TitleWithInput>
                    <Input
                        placeholder={"Descrição"}
                        onChangeText={(txt) => setDescricao(txt)}
                        style={{ marginBottom: 10 }}
                        value={descricao}
                    />

                    <TitleWithInput>Diagnóstico do paciente</TitleWithInput>
                    <Input
                        placeholder={"Diagnóstico"}
                        onChangeText={(txt) => setDiagnostico(txt)}
                        style={{ marginBottom: 10 }}
                        value={diagnostico}
                    />

                    <TitleWithInput>Prescrição médica</TitleWithInput>
                    <Input
                        placeholder={"Prescrição"}
                        onChangeText={(txt) => setMedicamento(txt)}
                        style={{ marginBottom: 10 }}
                        value={medicamento}
                    />

                    <Button onPress={() => {
                        handleRegister();

                    }}>
                        <ButtonTitle>Salvar</ButtonTitle>
                    </Button>
                    <LinkAction onPress={Main}>Voltar</LinkAction>
                </ScrollView>
            </ScrollViewContainer>
        </Container>

    );
};