import { StatusBar } from "expo-status-bar";
import { CardContainer, Container } from "../../components/Container/Style";
import { ButtonTitle, TitleScreen } from "../../components/Title/Style";
import { SelectDoctorCard } from "../../components/SelectDoctorCard/SelectDoctorCard";
import { Button } from "../../components/Button/Style";
import { LinkAction } from "../../components/Links/Style";
import { useEffect, useState } from "react";
import { api, doctorResource } from "../../service/service";
import { ListComponent, ListItemContainer } from "../../components/List/List";

export const SelectDoctor = ({ navigation, route }) => {
    const [doctorList, setDoctorList] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [doctor, setDoctor] = useState(null);

    async function ListDoctor() {
        try {
            const response = await api.get(`/Medicos/BuscarPorIdClinica?id=${route.params.agendamento.clinicaId}`);
            setDoctorList(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function Cancel() {
        navigation.replace("Main");
    }

    async function NextPage() {
        navigation.replace("SelectDate", {
            agendamento: {
                ...route.params.agendamento,
                ...doctor
            }
        });
    }

    const handleDoctorSelect = (doctorId) => {
        setSelectedDoctor(doctorId);
    };

    useEffect(() => {
        ListDoctor();
    }, [])

    useEffect(() => {
        console.log(route);
        console.log(doctor);
    }, [route])

    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <TitleScreen>Selecionar médico</TitleScreen>
            <ListComponent
                data={doctorList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ListItemContainer>
                        <CardContainer>
                            <SelectDoctorCard source={{ uri: item.idNavigation.foto }} name={item.idNavigation.nome} specialty={item.especialidade.especialidade1} selected={selectedDoctor === item.id}
                                onPress={() => {
                                    handleDoctorSelect(item.id);
                                    setDoctor({ medicoClinicaId: item.id, medicoLabel: item.idNavigation.nome, medicoEsp: item.especialidade.especialidade1 })
                                }} />
                        </CardContainer>
                    </ListItemContainer>
                )}
            />
            <Button onPress={NextPage} width={"90%"}>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>
            <LinkAction onPress={Cancel}>Cancelar</LinkAction>
        </Container>
    );
};