import { StatusBar } from "expo-status-bar";
import { CardContainer, Container } from "../../components/Container/Style";
import { ButtonTitle, TitleScreen } from "../../components/Title/Style";
import { Button } from "../../components/Button/Style";
import { LinkAction } from "../../components/Links/Style";
import { SelectClinicCard } from "../../components/SelectClinicCard/SelectClinicCard";;
import { useEffect, useState } from "react";
import { api, clinicListResource } from "../../service/service";
import { ListComponent, ListItemContainer } from "../../components/List/List";

export const SelectClinic = ({ navigation }) => {
    const [clinicList, setClinicList] = useState([]);
    const [selectedClinic, setSelectedClinic] = useState(null);

    async function listClinic() {
        try {
            const response = await api.get(doctorResource);
            setClinicList(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function handleContinue() {
        navigation.replace("SelectDoctor")
    }

    async function Return() {
        navigation.replace("Main");
    }

    const clinics = [
        {
            id: 1,
            title: "Clínica Natureh",
            numberStarYellow: "5,4",
            local: "São Paulo, SP",
            date: "Seg-Sex"
        },
        {
            id: 2,
            title: "Clínica Saúde Total",
            numberStarYellow: "4,5",
            local: "Rio de Janeiro, RJ",
            date: "Seg-Dom"
        },
        {
            id: 3,
            title: "Clínica Bem-Estar",
            numberStarYellow: "5,5",
            local: "Belo Horizonte, MG",
            date: "Seg-Sáb"
        },
        {
            id: 4,
            title: "Clínica Viva Melhor",
            numberStarYellow: "4,4",
            local: "Curitiba, PR",
            date: "Seg-Sex"
        },
        {
            id: 5,
            title: "Clínica Equilíbrio",
            numberStarYellow: "5,5",
            local: "Porto Alegre, RS",
            date: "Seg-Dom"
        },
        {
            id: 6,
            title: "Clínica Vita Plena",
            numberStarYellow: "4,5",
            local: "Florianópolis, SC",
            date: "Seg-Qua"
        },
        {
            id: 7,
            title: "Clínica Harmonia",
            numberStarYellow: "5,4",
            local: "Campinas, SP",
            date: "Seg-Dom"
        },
        {
            id: 8,
            title: "Clínica Saúde e Bem-Estar",
            numberStarYellow: "4,5",
            local: "Recife, PE",
            date: "Seg-Sáb"
        },
        {
            id: 9,
            title: "Clínica Corpo em Equilíbrio",
            numberStarYellow: "5,5",
            local: "Salvador, BA",
            date: "Seg-Sex"
        },
        {
            id: 10,
            title: "Clínica Renovação Total",
            numberStarYellow: "4,4",
            local: "Brasília, DF",
            date: "Seg-Dom"
        }
    ];

    const handleClinicSelect = (clinicId) => {
        setSelectedClinic(clinicId);
    };

    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <TitleScreen>Selecionar clínica</TitleScreen>
            <ListComponent
                data={clinics}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ListItemContainer>
                        <CardContainer>
                            <SelectClinicCard title={item.title} numberStarYellow={item.numberStarYellow} local={item.local} date={item.date} selected={selectedClinic === item.id} onPress={() => handleClinicSelect(item.id)} />
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