import { StatusBar } from "expo-status-bar";
import { CardContainer, Container, ScrollViewContainer } from "../../components/Container/Style";
import { ButtonTitle, Title, TitleScreen } from "../../components/Title/Style";
import { ScrollView } from "react-native";
import { SelectDoctorCard } from "../../components/SelectDoctorCard/Style";
import { Button } from "../../components/Button/Style";
import { LinkAction } from "../../components/Links/Style";

export const SelectDoctor = () => {
    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <TitleScreen>Selecionar médico</TitleScreen>
            <ScrollViewContainer widht={"100%"}>
                <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false} overScrollMode="never">
                    <CardContainer>
                        <SelectDoctorCard />
                        <SelectDoctorCard />
                        <SelectDoctorCard />
                        <SelectDoctorCard />
                        <SelectDoctorCard />
                        <SelectDoctorCard />
                        <SelectDoctorCard />
                        <Button>
                            <ButtonTitle>Continuar</ButtonTitle>
                        </Button>
                        <LinkAction>Cancelar</LinkAction>
                    </CardContainer>
                </ScrollView>
            </ScrollViewContainer>

        </Container>
    );
};