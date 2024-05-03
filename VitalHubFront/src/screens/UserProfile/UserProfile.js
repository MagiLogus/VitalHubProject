import { ScrollView, StatusBar } from "react-native";
import { Button, ButtonLogoff } from "../../components/Button/Style";
import { Container, ImageContainer, ScrollViewContainer, TextBoxArea, TextBoxContainer, TextBoxContainerRow } from "../../components/Container/Style";
import { ButtonTitle, EmailTitle, TextBoxText, TextBoxTitle, Title } from "../../components/Title/Style";
import { userDecodeToken } from "../../utils/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react";
import { api, profileResource } from "../../service/service";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ButtonCamera, ContainerImage } from "./Style";
import ModalCamera from "../../components/CameraModal/CameraModal";
import { Input } from "../../components/Input/Style";
import moment from "moment/moment";

export const UserProfile = ({ navigation }) => {
    const [profile, setProfile] = useState([]);
    const [id, setId] = useState("");
    const [tokenLoad, setTokenLoad] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [capturedImageUri, setCapturedImageUri] = useState(null);
    const [editProfile, setEditProfile] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [birth, setBirth] = useState("");
    const [cpf, setCpf] = useState("");
    const [cep, setCep] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [number, setNumeber] = useState("");

    useEffect(() => {
        profileLoad();
    }, []);

    async function profileLoad() {
        const token = await userDecodeToken();
        setId(token.id);
        setTokenLoad(true);
    }

    useEffect(() => {
        async function ListUserProfile() {
            try {
                const response = await api.get(`${profileResource}?id=${id}`);
                const data = response.data;
                setProfile(data);
                setName(data.idNavigation.nome)
                setEmail(data.idNavigation.email)
                setBirth(new Date(data.dataNascimento).toLocaleDateString())
                setCep(data.endereco.cep)
                setCpf(data.cpf)
                setStreet(data.endereco.logradouro)
                setCity(data.endereco.cidade)
                setState(data.endereco.estado)
                setNumeber(data.endereco.numero.toString())
            } catch (error) {
                console.log(error);
            }
        }
        ListUserProfile();
    }, [tokenLoad]);

    async function Logoff() {
        await AsyncStorage.removeItem('token');

        const token = await AsyncStorage.getItem('token');

        if (!token) {
            console.log('Token removido com sucesso.');
            console.log(token);
        } else {
            console.log('Erro ao remover o token.');
        }
        navigation.replace("Login");
    }

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleConfirm = (photo) => {
        setCapturedImageUri(photo);
        handleCloseModal();
    };

    const handleOpenEdit = () => {
        setEditProfile(true);
    };

    const handleCloseEdit = () => {
        setEditProfile(false);
    };

    async function UpdateProfile() {
        const formData = new FormData();
        formData.append("Arquivo", {
            uri: capturedImageUri,
            name: `image.${capturedImageUri.split(".").pop()}`,
            type: `image/${capturedImageUri.split(".").pop()}`
        });

        formData.append("Cidade", city);
        formData.append("Estado", state);
        formData.append("Cep", cep);
        formData.append("Logradouro", street);
        formData.append("DataNascimento", moment(birth).format('YYYY-MM-DD'));
        formData.append("Cpf", cpf);
        formData.append("Nome", name);
        formData.append("Numero", number);
        formData.append("Email", email);

        await api.put(`/Pacientes`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <ContainerImage>
                {editProfile ? (
                    capturedImageUri ? (
                        <ImageContainer source={{ uri: capturedImageUri }} />
                    ) : (
                        <ImageContainer source={require("../../assets/images/user_profile.png")} />
                    )
                ) : (
                    <ImageContainer source={require("../../assets/images/user_profile.png")} />
                )}
                {editProfile ? (
                    <ButtonCamera onPress={handleOpenModal}>
                        <MaterialCommunityIcons name="camera-plus" size={20} color="#fbfbfb" />
                    </ButtonCamera>
                ) : (
                    <></>
                )}
                <ModalCamera
                    visible={modalVisible}
                    onClose={handleCloseModal}
                    title="Título do Modal"
                    onConfirm={handleConfirm}
                />
            </ContainerImage>
            <ScrollViewContainer>
                <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false} overScrollMode="never">
                    {editProfile ? (
                        <></>
                    ) : (
                        <>
                            <Title>{profile && profile.idNavigation ? profile.idNavigation.nome : ""}</Title>
                            <EmailTitle>{profile && profile.idNavigation ? profile.idNavigation.email : ""}</EmailTitle>
                        </>
                    )}

                    {editProfile ? (
                        <Input value={name}
                            onChangeText={(txt) => setName(txt)} size="100%" placeholder="Nome" />
                    ) : (
                        <TextBoxContainer>
                            <TextBoxTitle>Data de Nascimento:</TextBoxTitle>
                            <TextBoxArea>
                                <TextBoxText>{profile ? new Date(profile.dataNascimento).toLocaleDateString() : ""}</TextBoxText>
                            </TextBoxArea>
                        </TextBoxContainer>

                    )}

                    {editProfile ? (
                        <Input value={email}
                            onChangeText={(txt) => setEmail(txt)} size="100%" placeholder="Email" />
                    ) : (
                        <TextBoxContainer>
                            <TextBoxTitle>CPF:</TextBoxTitle>
                            <TextBoxArea>
                                <TextBoxText>{profile && profile.cpf ? profile.cpf.substring(0, 3) + '.***.***-**' : ""}</TextBoxText>
                            </TextBoxArea>
                        </TextBoxContainer>
                    )}

                    {editProfile ? (
                        <Input value={birth}
                            onChangeText={(txt) => setBirth(txt)} keyboardType="numeric" size="100%" placeholder="Data de Nascimento" />
                    ) : (
                        <></>
                    )}

                    {editProfile ? (
                        <Input value={cpf}
                            onChangeText={(txt) => setCpf(txt)} keyboardType="numeric" size="100%" placeholder="Cpf" />
                    ) : (
                        <TextBoxContainer>
                            <TextBoxTitle>Endereço:</TextBoxTitle>
                            <TextBoxArea>
                                <TextBoxText>{profile.endereco ? `${profile.endereco.logradouro}, ${profile.endereco.numero}` : ""}</TextBoxText>
                            </TextBoxArea>
                        </TextBoxContainer>
                    )}

                    {editProfile ? (
                        <Input value={cep}
                            onChangeText={(txt) => setCep(txt)} keyboardType="numeric" size="100%" placeholder="Cep" />
                    ) : (
                        <></>
                    )}

                    {editProfile ? (
                        <Input value={street}
                            onChangeText={(txt) => setStreet(txt)} size="100%" placeholder="Logradouro" />
                    ) : (
                        <></>
                    )}

                    {editProfile ? (
                        <>
                            <Input value={city}
                                onChangeText={(txt) => setCity(txt)} size="100%" placeholder="Cidade" />
                            <Input value={state}
                                onChangeText={(txt) => setState(txt)} size="100%" placeholder="Estado" />
                        </>

                    ) : (
                        <TextBoxContainer >
                            <TextBoxTitle>Cep:</TextBoxTitle>
                            <TextBoxArea >
                                <TextBoxText>{profile.endereco ? profile.endereco.cep : ""}</TextBoxText>
                            </TextBoxArea>
                        </TextBoxContainer>
                    )}

                    {editProfile ? (
                        <Input value={number}
                            onChangeText={(txt) => setNumeber(txt)} keyboardType="numeric" size="100%" placeholder="Número" />
                    ) : (
                        <TextBoxContainer >
                            <TextBoxTitle>Cidade:</TextBoxTitle>
                            <TextBoxArea >
                                <TextBoxText>{profile.endereco ? `${profile.endereco.cidade} - ${profile.endereco.estado}` : ""}</TextBoxText>
                            </TextBoxArea>
                        </TextBoxContainer>
                    )}

                    {editProfile ? (
                        <Button onPress={UpdateProfile}>
                            <ButtonTitle >Salvar</ButtonTitle>
                        </Button>
                    ) : (
                        <></>
                    )}
                    {editProfile ? (
                        <Button onPress={handleCloseEdit} style={{ marginBottom: 30 }}>
                            <ButtonTitle >Cancelar</ButtonTitle>
                        </Button>
                    ) : (
                        <></>
                    )}
                    {editProfile ? (
                        <></>
                    ) : (
                        <Button onPress={handleOpenEdit}>
                            <ButtonTitle >Editar</ButtonTitle>
                        </Button>
                    )}
                    {editProfile ? (
                        <></>
                    ) : (
                        <ButtonLogoff onPress={Logoff}>
                            <ButtonTitle>Sair do APP</ButtonTitle>
                        </ButtonLogoff>
                    )}
                </ScrollView>
            </ScrollViewContainer>
        </Container>
    );
};