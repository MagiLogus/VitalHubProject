import { StatusBar } from "react-native";
import { Container, FilterAppointment, ImageTopBar, TopBar, TopBarContainer, TopBarImageContainer, TopBarTitleContainer } from "../../components/Container/Style";
import { AlertIcon, MedicalIcon } from "../../components/Icons/Style";
import { Subtitle, TitleTopBar } from "../../components/Title/Style";
import { CalendarList } from "../../components/Calendar/Calendar";
import { AbsListAppointment } from "../../components/AbsListAppointment/AbsListAppointment";
import { useState } from "react";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import { ListComponent } from "../../components/List/List";
import { CancellationModal } from "../../components/CancellationModal/CancellationModal";
import { AppointmentButton } from "../../components/Button/Style";

const Consultas = [
    { id: 1, nome: "Dr.Carlos", situacao: "pendente" },
    { id: 2, nome: "Dr.Carlos", situacao: "realizado" },
    { id: 3, nome: "Dr.Carlos", situacao: "cancelado" },
    { id: 4, nome: "Dr.Carlos", situacao: "cancelado" },
    { id: 5, nome: "Dr.Carlos", situacao: "cancelado" },
    { id: 6, nome: "Dr.Carlos", situacao: "cancelado" },
    { id: 7, nome: "Dr.Carlos", situacao: "cancelado" }
]

export const PacientAppointments = () => {
    const [statusList, setStatusList] = useState("pendente")
    const [showModalCancel, setShowModalCancel] = useState(false);
    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <TopBar>
                <TopBarContainer>
                    <TopBarTitleContainer>
                        <ImageTopBar source={require("../../assets/images/user_profile.png")} />
                        <TopBarImageContainer>
                            <Subtitle>Bem Vindo</Subtitle>
                            <TitleTopBar>Richard Kosta</TitleTopBar>
                        </TopBarImageContainer>
                    </TopBarTitleContainer>
                    <AlertIcon />
                </TopBarContainer>
            </TopBar>
            <CalendarList />
            <FilterAppointment>
                <AbsListAppointment textButton={"Agendadas"} clickButton={statusList === "pendente"} onPress={() => setStatusList("pendente")} />
                <AbsListAppointment textButton={"Realizadas"} clickButton={statusList === "realizado"} onPress={() => setStatusList("realizado")} />
                <AbsListAppointment textButton={"Canceladas"} clickButton={statusList === "cancelado"} onPress={() => setStatusList("cancelado")} />
            </FilterAppointment>
            <ListComponent
                data={Consultas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    statusList == item.situacao && (
                        <AppointmentCard
                            situacao={item.situacao}
                            onPressCancel={() => setShowModalCancel(true)}
                            onPressAppointment={() => setShowModalAppointment(true)}
                        />
                    )
                }
            />
            <CancellationModal
                visible={showModalCancel}
                setShowModalCancel={setShowModalCancel}
            />
            <AppointmentButton onPress={() => setShowModalCancel(true)}>
                <MedicalIcon />
            </AppointmentButton>
        </Container>
    );
};