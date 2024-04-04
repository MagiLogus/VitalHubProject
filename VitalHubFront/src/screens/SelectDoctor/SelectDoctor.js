import { StatusBar } from "expo-status-bar";
import { CardContainer, Container } from "../../components/Container/Style";
import { ButtonTitle, TitleScreen } from "../../components/Title/Style";
import { SelectDoctorCard } from "../../components/SelectDoctorCard/SelectDoctorCard";
import { Button } from "../../components/Button/Style";
import { LinkAction } from "../../components/Links/Style";
import { useEffect, useState } from "react";
import { api, doctorResource } from "../../service/service";
import { ListComponent, ListItemContainer } from "../../components/List/List";

export const SelectDoctor = ({ navigation }) => {
    const [doctorList, setDoctorList] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    async function ListDoctor() {
        try {
            const response = await api.get(doctorResource);
            setDoctorList(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function Return() {
        navigation.replace("SelectClinic");
    }

    const handleDoctorSelect = (doctorId) => {
        setSelectedDoctor(doctorId);
    };

    useEffect(() => {
        ListDoctor();
    }, [])

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
                            <SelectDoctorCard name={item.idNavigation.nome} specialty={item.especialidade.especialidade1} selected={selectedDoctor === item.id} // Define se o médico está selecionado com base no estado
                                onPress={() => handleDoctorSelect(item.id)} />
                        </CardContainer>
                    </ListItemContainer>
                )}
            />
            <Button width={"90%"}>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>
            <LinkAction onPress={Return}>Voltar</LinkAction>
        </Container>
    );
};