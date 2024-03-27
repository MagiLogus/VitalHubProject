import { StatusBar } from "expo-status-bar";
import { Container, ScrollViewContainer } from "../../components/Container/Style";
import { ButtonTitle, TitleScreen } from "../../components/Title/Style";
import { ScrollView } from "react-native";
import { SelectDoctorCard } from "../../components/SelectDoctorCard/Style";
import { Button } from "../../components/Button/Style";
import { LinkAction } from "../../components/Links/Style";
import { useEffect, useState } from "react";
import { api, doctorResource } from "../../service/service";
import { ListComponent, ListItemContainer } from "../../components/List/List";


export const SelectDoctor = () => {
    const [doctorList, setDoctorList] = useState([]);

    async function ListDoctor() {
        await api.get(doctorResource)
            .then(response => {
                setDoctorList(response.data)
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        ListDoctor();
    }, [])

    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <TitleScreen>Selecionar médico</TitleScreen>
            <ScrollViewContainer widht={"100%"}>
                <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false} overScrollMode="never">
                    <ListComponent
                        data={doctorList}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <ListItemContainer>
                                <SelectDoctorCard name={item.idNavigation.nome} specialty={item.especialidade.especialidade1} />
                            </ListItemContainer>
                        )}
                    />
                    <Button>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </Button>
                    <LinkAction>Cancelar</LinkAction>
                </ScrollView>
            </ScrollViewContainer>
        </Container>
    );
};