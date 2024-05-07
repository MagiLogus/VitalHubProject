import { StatusBar } from "react-native";
import { Container, FilterAppointment, } from "../../components/Container/Style";
import { MedicalIcon } from "../../components/Icons/Style";
import { CalendarList } from "../../components/Calendar/Calendar";
import { TabsListAppointment } from "../../components/TabsListAppointment/TabsListAppointment"
import { useEffect, useState } from "react";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import { ListComponent, ListItemContainer } from "../../components/List/List";
import { CancellationModal } from "../../components/CancellationModal/CancellationModal";
import { AppointmentButton } from "../../components/Button/Style";
import { Header } from "../../components/Header/Header";
import { ScheduleAppointment } from "../../screens/ScheduleAppointment/ScheduleAppointment"
import { api } from "../../service/service";
import { userDecodeToken } from "../../utils/Auth";
import { differenceInYears } from 'date-fns';

const Consultas = [
    { id: 1, nome: "Paulo Oliveira", age: "25", situacao: "pendente", level: "Rotina", source: "https://avatars.githubusercontent.com/u/125275514?v=4", email: 'paulo@email.com', profile: "Médico", speciality: "Cardiologista", crm: 'CRM-123456' },
    { id: 2, nome: "Carlos Roque", age: "26", situacao: "realizado", level: "Exame", source: "https://avatars.githubusercontent.com/u/125273727?v=4", email: 'carlos@email.com', profile: "Médico", speciality: "Cardiologista", crm: 'CRM-123456' },
    { id: 3, nome: "Luiz Carlos", age: "27", situacao: "realizado", level: "Urgência", source: "https://avatars.githubusercontent.com/u/134458811?v=4", email: 'luiz@email.com', profile: "Pacientes" },
    { id: 4, nome: "Lucas Santos", age: "28", situacao: "cancelado", level: "Rotina", source: "https://avatars.githubusercontent.com/u/125273798?v=4", email: 'lucas@email.com', profile: "Pacientes" },
    { id: 5, nome: "Ana Santos", age: "29", situacao: "cancelado", level: "Urgência", source: "https://avatars.githubusercontent.com/u/133692577?v=4", email: 'ana@email.com', profile: "Pacientes" },
    { id: 6, nome: "Everton Araujo", age: "30", situacao: "cancelado", level: "Rotina", source: "https://avatars.githubusercontent.com/u/125310213?v=4", email: 'evertoon@email.com', profile: "Pacientes" },
    { id: 7, nome: "Kamille Junior", age: "31", situacao: "cancelado", level: "Exame", source: "https://avatars.githubusercontent.com/u/125273621?v=4", email: 'kamille@email.com', profile: "Pacientes" }
]

export const Appointments = ({ navigation }) => {
    const [statusList, setStatusList] = useState("pendente")
    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalAgendamento, setShowModalAgendamento] = useState(false);
    const [profile, setProfile] = useState([]);
    const [dateAppointment, setDateAppointment] = useState("");
    const [appointment, setAppointment] = useState([]);
    const [user, setUser] = useState([])

    async function profileLoad() {
        const token = await userDecodeToken();
        setProfile(token);
        setUser(token.role);
    }

    useEffect(() => {
        profileLoad();
    }, []);

    async function UserProfile() {
        navigation.replace("UserProfile");
    }

    useEffect(() => {
        console.log(dateAppointment);
        console.log(profile.id);
        console.log(user.role);
    }, [dateAppointment]);

    async function ListarConsultas() {
        const url = (user == 'Medico' ? 'Medicos' : 'Pacientes')
        console.log(url);
        await api.get(`/${url}/BuscarPorData?data=${dateAppointment}&id=${profile.id}`)
            .then(response => {
                console.log(response.data);
                setAppointment(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        ListarConsultas();
    }, [dateAppointment])



    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <Header onPress={UserProfile} />
            <CalendarList setDateAppointment={setDateAppointment} />
            <FilterAppointment>
                <TabsListAppointment textButton={"Agendadas"} clickButton={statusList === "pendente"} onPress={() => setStatusList("pendente")} />
                <TabsListAppointment textButton={"Realizados"} clickButton={statusList === "Realizados"} onPress={() => setStatusList("Realizados")} />
                <TabsListAppointment textButton={"Canceladas"} clickButton={statusList === "cancelado"} onPress={() => setStatusList("cancelado")} />
            </FilterAppointment>
            <ListComponent
                data={appointment}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    statusList == item.situacao.situacao && (
                        <ListItemContainer>
                            <AppointmentCard
                                navigation={navigation}
                                name={item.medicoClinica.medico.idNavigation.nome}
                                age={differenceInYears(new Date(), new Date())}
                                profile={item.medicoClinica.medico.idNavigation.tipoUsuario.tipoUsuario}
                                level={item.prioridade.prioridade}
                                crm={item.medicoClinica.medico.crm}
                                imageSource={item.source}
                                situacao={item.situacao.situacao}
                                speciality={item.speciality}
                                email={item.email}
                                clinicId={item.medicoClinica.clinicaId}
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

            {user === 'Pacientes' && (
                <AppointmentButton onPress={() => setShowModalAgendamento(true)}>
                    <MedicalIcon />
                </AppointmentButton>
            )}
        </Container>
    );
};