import { StatusBar } from "react-native";
import { Container, FilterAppointment, } from "../../components/Container/Style";
import { MedicalIcon } from "../../components/Icons/Style";
import { CalendarList } from "../../components/Calendar/Calendar";
import { TabsListAppointment } from "../../components/TabsListAppointment/TabsListAppointment"
import { useState } from "react";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import { ListComponent, ListItemContainer } from "../../components/List/List";
import { CancellationModal } from "../../components/CancellationModal/CancellationModal";
import { AppointmentButton } from "../../components/Button/Style";
import { Header } from "../../components/Header/Header";
import { ScheduleAppointment } from "../../screens/ScheduleAppointment/ScheduleAppointment"

const Consultas = [
    { id: 1, nome: "Paulo Oliveira", age: "25", situacao: "pendente", level: "Rotina", source: "https://avatars.githubusercontent.com/u/125275514?v=4", email: 'paulo@email.com', profile: "Médico", speciality: "Cardiologista", crm: 'CRM-123456' },
    { id: 2, nome: "Carlos Roque", age: "26", situacao: "realizado", level: "Exame", source: "https://avatars.githubusercontent.com/u/125273727?v=4", email: 'carlos@email.com', profile: "Médico", speciality: "Cardiologista", crm: 'CRM-123456' },
    { id: 3, nome: "Luiz Carlos", age: "27", situacao: "realizado", level: "Urgência", source: "https://avatars.githubusercontent.com/u/134458811?v=4", email: 'luiz@email.com', profile: "Paciente" },
    { id: 4, nome: "Lucas Santos", age: "28", situacao: "cancelado", level: "Rotina", source: "https://avatars.githubusercontent.com/u/125273798?v=4", email: 'lucas@email.com', profile: "Paciente" },
    { id: 5, nome: "Ana Santos", age: "29", situacao: "cancelado", level: "Urgência", source: "https://avatars.githubusercontent.com/u/133692577?v=4", email: 'ana@email.com', profile: "Paciente" },
    { id: 6, nome: "Everton Araujo", age: "30", situacao: "cancelado", level: "Rotina", source: "https://avatars.githubusercontent.com/u/125310213?v=4", email: 'evertoon@email.com', profile: "Paciente" },
    { id: 7, nome: "Kamille Junior", age: "31", situacao: "cancelado", level: "Exame", source: "https://avatars.githubusercontent.com/u/125273621?v=4", email: 'kamille@email.com', profile: "Paciente" }
]

export const Appointments = ({ navigation }) => {
    const [statusList, setStatusList] = useState("pendente")
    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalAgendamento, setShowModalAgendamento] = useState(false);
    const [profile, setProfile] = useState("Paciente");

    async function UserProfile() {
        navigation.replace("UserProfile");
    }

    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <Header name="Paulo Oliveira" imageSource={("https://avatars.githubusercontent.com/u/125275514?v=4")} profile={profile} onPress={UserProfile} />
            <CalendarList />
            <FilterAppointment>
                <TabsListAppointment textButton={"Agendadas"} clickButton={statusList === "pendente"} onPress={() => setStatusList("pendente")} />
                <TabsListAppointment textButton={"Realizadas"} clickButton={statusList === "realizado"} onPress={() => setStatusList("realizado")} />
                <TabsListAppointment textButton={"Canceladas"} clickButton={statusList === "cancelado"} onPress={() => setStatusList("cancelado")} />
            </FilterAppointment>
            <ListComponent
                data={Consultas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    statusList == item.situacao && (
                        <ListItemContainer>
                            <AppointmentCard
                                navigation={navigation}
                                name={item.nome}
                                age={item.age}
                                profile={item.profile}
                                level={item.level}
                                crm={item.crm}
                                imageSource={item.source}
                                situacao={item.situacao}
                                speciality={item.speciality}
                                email={item.email}
                                onPressCancel={() => setShowModalCancel(true)}

                            />
                        </ListItemContainer>
                    )
                }
            />
            <CancellationModal
                visible={showModalCancel}
                setShowModalCancel={setShowModalCancel}
            />

            <ScheduleAppointment
                visible={showModalAgendamento}
                navigation={navigation}
                setShowModalAgendamento={setShowModalAgendamento}
            />





            {profile === 'Paciente' && (
                <AppointmentButton onPress={() => setShowModalAgendamento(true)}>
                    <MedicalIcon />
                </AppointmentButton>
            )}
        </Container>
    );
};