import { StatusBar } from "expo-status-bar";
import { CardContainer, Container, ScrollViewContainer } from "../../components/Container/Style";
import { ButtonTitle, TitleScreen } from "../../components/Title/Style";
import { ScrollView } from "react-native";
import { Button } from "../../components/Button/Style";
import { LinkAction } from "../../components/Links/Style";
import { SelectClinicCard } from "../../components/SelectClinicCard/SelectClinicCard";

export const SelectClinic = () => {
    async function SelectDoctor() {
        navigation.replace("SelectDoctor")
    }
    async function PacientAppointments() {
        navigation.replace("PacientAppointments")
    }
    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <TitleScreen>Selecionar clínica</TitleScreen>
            <ScrollViewContainer widht={"100%"}>
                <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false} overScrollMode="never">
                    <CardContainer>
                        <SelectClinicCard title={"Clínica Natureh"} numberStarYellow={"5,4"} local={"São Paulo, SP"} date={"Seg-Sex"} />
                        <SelectClinicCard title={"Clínica Natureh"} numberStarYellow={"5,4"} local={"São Paulo, SP"} date={"Seg-Sex"} />
                        <SelectClinicCard title={"Clínica Natureh"} numberStarYellow={"5,4"} local={"São Paulo, SP"} date={"Seg-Sex"} />
                        <SelectClinicCard title={"Clínica Natureh"} numberStarYellow={"5,4"} local={"São Paulo, SP"} date={"Seg-Sex"} />
                        <SelectClinicCard title={"Clínica Natureh"} numberStarYellow={"5,4"} local={"São Paulo, SP"} date={"Seg-Sex"} />
                        <SelectClinicCard title={"Clínica Natureh"} numberStarYellow={"5,4"} local={"São Paulo, SP"} date={"Seg-Sex"} />
                        <SelectClinicCard title={"Clínica Natureh"} numberStarYellow={"5,4"} local={"São Paulo, SP"} date={"Seg-Sex"} />
                        <SelectClinicCard title={"Clínica Natureh"} numberStarYellow={"5,4"} local={"São Paulo, SP"} date={"Seg-Sex"} />
                        <SelectClinicCard title={"Clínica Natureh"} numberStarYellow={"5,4"} local={"São Paulo, SP"} date={"Seg-Sex"} />
                        <SelectClinicCard title={"Clínica Natureh"} numberStarYellow={"5,4"} local={"São Paulo, SP"} date={"Seg-Sex"} />
                        <Button onPress={() => SelectDoctor()}>
                            <ButtonTitle>Continuar</ButtonTitle>
                        </Button>
                        <LinkAction onPress={() => PacientAppointments()}>Cancelar</LinkAction>
                    </CardContainer>
                </ScrollView>
            </ScrollViewContainer>
        </Container>
    );
};