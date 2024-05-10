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
import { differenceInYears, format } from 'date-fns';

export const Appointments = ({ navigation }) => {
    const [statusList, setStatusList] = useState("Pendentes")
    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalAgendamento, setShowModalAgendamento] = useState(false);
    const [reload, setReload] = useState(false);
    const [profile, setProfile] = useState([]);
    const [dateAppointment, setDateAppointment] = useState("");
    const [appointment, setAppointment] = useState([]);
    const [user, setUser] = useState([]);
    const [appointmentId, setAppointmentId] = useState('');

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
        console.log(user);
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

    async function onPressHandleCancel() {
        console.log(appointmentId);
        await api.put(`/Consultas/Status?idConsulta=${appointmentId}&status=Cancelados`)
            .then(response => {
                console.log(response.data);
                setShowModalCancel(false)
                setReload(prevState => !prevState);
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        ListarConsultas();
    }, [dateAppointment, reload])



    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <Header onPress={UserProfile} />
            <CalendarList setDateAppointment={setDateAppointment} />
            <FilterAppointment>
                <TabsListAppointment textButton={"Agendadas"} clickButton={statusList === "Pendentes"} onPress={() => setStatusList("Pendentes")} />
                <TabsListAppointment textButton={"Realizados"} clickButton={statusList === "Realizados"} onPress={() => setStatusList("Realizados")} />
                <TabsListAppointment textButton={"Canceladas"} clickButton={statusList === "Cancelados"} onPress={() => setStatusList("Cancelados")} />
            </FilterAppointment>
            {user == 'Pacientes' ? (
                <ListComponent
                    data={appointment}
                    //ListEmptyComponent={em} adicionar um listemprty 
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        statusList == item.situacao.situacao && (
                            <ListItemContainer>
                                <AppointmentCard
                                    hour={format(new Date(item.dataConsulta), 'HH:mm')}
                                    navigation={navigation}
                                    name={item.medicoClinica.medico.idNavigation.nome}
                                    age={differenceInYears(new Date(), new Date())}
                                    profile={item.medicoClinica.medico.idNavigation.tipoUsuario.tipoUsuario}
                                    level={item.prioridade.prioridade}
                                    crm={item.medicoClinica.medico.crm}
                                    imageSource={item.medicoClinica.medico.idNavigation.foto}
                                    situacao={item.situacao.situacao}
                                    speciality={item.speciality}
                                    email={item.email}
                                    clinicId={item.medicoClinica.clinicaId}
                                    onPressCancel={() => {
                                        setShowModalCancel(true);
                                        setAppointmentId(item.id);
                                    }}
                                />
                            </ListItemContainer>
                        )
                    }
                />
            ) : (
                <ListComponent
                    data={appointment}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        statusList == item.situacao.situacao && (
                            <ListItemContainer>
                                <AppointmentCard
                                    appointmentId={item.id}
                                    navigation={navigation}
                                    hour={format(new Date(item.dataConsulta), 'HH:mm')}
                                    name={item.paciente.idNavigation.nome}
                                    age={differenceInYears(new Date(), new Date(item.paciente.dataNascimento))}
                                    profile={item.paciente.idNavigation.tipoUsuario.tipoUsuario}
                                    level={item.prioridade.prioridade}
                                    imageSource={item.paciente.idNavigation.foto}
                                    situacao={item.situacao.situacao}
                                    speciality={item.speciality}
                                    email={item.email}
                                    clinicId={item.medicoClinica.clinicaId}
                                    onPressCancel={() => {
                                        setShowModalCancel(true);
                                        setAppointmentId(item.id);
                                    }}
                                />
                            </ListItemContainer>
                        )
                    }
                />
            )}
            <CancellationModal
                visible={showModalCancel}
                setShowModalCancel={setShowModalCancel}
                onPressHandleCancel={onPressHandleCancel}
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