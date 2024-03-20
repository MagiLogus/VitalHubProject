import { StatusBar } from "react-native";
import { Container, FilterAppointment, ImageTopBar, TopBar, TopBarContainer, TopBarImageContainer, TopBarTitleContainer } from "../../components/Container/Style";
import { AlertIcon } from "../../components/Icons/Style";
import { Subtitle, TitleTopBar } from "../../components/Title/Style";
import { CalendarList } from "../../components/Calendar/Calendar";
import { AbsListAppointment } from "../../components/AbsListAppointment/AbsListAppointment";
import { useState } from "react";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import { ListComponent } from "../../components/List/List";
import { CancellationModal } from "../../components/CancellationModal/CancellationModal";
import { AppointmentModal } from "../../components/AppointmentModal/AppointmentModal";

const Consultas = [
    { id: 1, nome: "Carlos", situacao: "pendente" },
    { id: 1, nome: "Carlos", situacao: "realizado" },
    { id: 1, nome: "Carlos", situacao: "cancelado" },
    { id: 1, nome: "Carlos", situacao: "cancelado" }
]

export const DoctorsAppointments = () => {
    const [statusList, setStatusList] = useState("pendente")
    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalAppointment, setShowModalAppointment] = useState(false);
    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <TopBar>
                <TopBarContainer>
                    <TopBarTitleContainer>
                        <ImageTopBar source={require("../../assets/images/user_profile.png")} />
                        <TopBarImageContainer>
                            <Subtitle>Bem Vindo</Subtitle>
                            <TitleTopBar>Dr(a). Claudio</TitleTopBar>
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
            <AppointmentModal
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
            />

        </Container>
    );
};