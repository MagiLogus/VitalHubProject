import { StatusBar } from "expo-status-bar";
import { CardContainer, Container, ScrollViewContainer } from "../../components/Container/Style";
import { ButtonTitle, TitleScreen } from "../../components/Title/Style";
import { ScrollView } from "react-native";
import { SelectDoctorCard } from "../../components/SelectDoctorCard/Style";
import { Button } from "../../components/Button/Style";
import { LinkAction } from "../../components/Links/Style";
import { useEffect, useState } from "react";
import { api, doctorResource } from "../../service/service";
import { ListComponent, ListItemContainer } from "../../components/List/List";


export const SelectDoctor = ({ navigation }) => {
    const [doctorList, setDoctorList] = useState([]);

    async function ListDoctor() {
        await api.get(doctorResource)
            .then(response => {
                setDoctorList(response.data)
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        ListDoctor();
    }, [])

    async function Return() {
        navigation.replace("Main");
    }



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
                            <SelectDoctorCard name={item.idNavigation.nome} specialty={item.especialidade.especialidade1}/>
                        </CardContainer>
                    </ListItemContainer>
                )}
            />
            <Button width={"90%"}>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>
            <LinkAction onPress={Return}>Cancelar</LinkAction>
        </Container>
    );
};