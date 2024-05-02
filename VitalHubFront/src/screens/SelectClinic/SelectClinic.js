import { StatusBar } from "expo-status-bar";
import { CardContainer, Container } from "../../components/Container/Style";
import { ButtonTitle, TitleScreen } from "../../components/Title/Style";
import { Button } from "../../components/Button/Style";
import { LinkAction } from "../../components/Links/Style";
import { SelectClinicCard } from "../../components/SelectClinicCard/SelectClinicCard";;
import { useEffect, useState } from "react";
import { api, clinicListResource } from "../../service/service";
import { ListComponent, ListItemContainer } from "../../components/List/List";

export const SelectClinic = ({ navigation, route }) => {
    const [clinicList, setClinicList] = useState([]);
    const [selectedClinic, setSelectedClinic] = useState(null);
    const [clinic, setClinic] = useState(null);

    async function listClinic() {
        try {
            const response = await api.get(`/Clinica/BuscarPorCidade?cidade=${route.params.agendamento.localizacao}`);
            setClinicList(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function handleContinue() {
        navigation.replace("SelectDoctor", { agendamento: { ...route.params.agendamento, ...clinic } })
    }

    async function Return() {
        navigation.replace("Main");
    }

    const handleClinicSelect = (clinicId) => {
        setSelectedClinic(clinicId);
    };

    useEffect(() => {
        listClinic();
    }, [])



    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <TitleScreen>Selecionar clínica</TitleScreen>
            <ListComponent
                data={clinicList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ListItemContainer>
                        <CardContainer>
                            <SelectClinicCard title={item.nomeFantasia} numberStarYellow={4.5} local={`${item.endereco.cidade}, ${item.endereco.estado}`} date={'Seg-Sex'} selected={selectedClinic === item.id} onPress={() => {
                                handleClinicSelect(item.id);
                                setClinic({ clinicaId: item.id, clinicaLabel: item.nomeFantasia });
                            }} />
                        </CardContainer>
                    </ListItemContainer>
                )}
            />
            <Button width={"90%"} onPress={handleContinue}>
                <ButtonTitle >Continuar</ButtonTitle>
            </Button>
            <LinkAction onPress={Return}>Cancelar</LinkAction>
        </Container>
    );
};