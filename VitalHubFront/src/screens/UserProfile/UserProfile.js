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
    const [photo, setPhoto] = useState(null);
    const [editProfile, setEditProfile] = useState(false);
    const [name, setName] = useState("");
    const [photoFile, setPhotoFile] = useState(null);
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
                console.log(response.data);
                setProfile(data);
                setPhoto(data.idNavigation.foto);
                setName(data.idNavigation.nome)
                setEmail(data.idNavigation.email)
                setBirth(moment(data.dataNascimento).format('YYYY/MM/DD'))
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
    }, [tokenLoad, capturedImageUri]);

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

        async function UpdatePicture() {
            const formData = new FormData();

            formData.append("Arquivo", {
                uri: photo,
                name: `image.${photo.split(".").pop()}`,
                type: `image/${photo.split(".").pop()}`
            });


            await api.put(`/Usuario/AlterarFotoPerfil?id=${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => {
                console.log(response);
                setCapturedImageUri(photo);
                handleCloseModal();
            }).catch(error => {
                console.log(error);
            })
        }
        UpdatePicture();
    };

    const handleOpenEdit = () => {
        setEditProfile(true);
    };

    const handleCloseEdit = () => {
        setEditProfile(false);
    };

    const formatBirth = (text) => {
        const cleanedText = text.replace(/\D/g, '');

        let formattedText = '';
        if (cleanedText.length > 4) {
            formattedText += cleanedText.substring(0, 4) + '/';
            if (cleanedText.length > 6) {
                formattedText += cleanedText.substring(4, 6) + '/';
                formattedText += cleanedText.substring(6, 8);
            } else {
                formattedText += cleanedText.substring(4);
            }
        } else {
            formattedText = cleanedText;
        }

        return formattedText;
    };

    const formatCEP = (text) => {
        const cleanedText = text.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

        let formattedText = '';

        if (cleanedText.length > 5) {
            formattedText += cleanedText.substring(0, 5) + '-'; // Adiciona os primeiros 5 dígitos seguidos de um hífen
            formattedText += cleanedText.substring(5); // Adiciona os dígitos restantes
        } else {
            formattedText = cleanedText; // Se não houver mais que 5 dígitos, retorna o texto sem formatação
        }

        return formattedText;
    };

    const formatCPF = (text) => {
        const cleanedText = text.replace(/\D/g, '');

        let formattedText = '';
        if (cleanedText.length > 3) {
            formattedText += cleanedText.substring(0, 3) + '.';
            if (cleanedText.length > 6) {
                formattedText += cleanedText.substring(3, 6) + '.';
                if (cleanedText.length > 9) {
                    formattedText += cleanedText.substring(6, 9) + '-';
                    formattedText += cleanedText.substring(9, 11);
                } else {
                    formattedText += cleanedText.substring(6);
                }
            } else {
                formattedText += cleanedText.substring(3);
            }
        } else {
            formattedText = cleanedText;
        }

        return formattedText;
    };

    async function UpdateProfile() {
        const formData = new FormData();

        formData.append("Cidade", city);
        formData.append("IdTipoUsuario", "41BA08AE-915B-4913-B3EB-45A19E8172E0");
        formData.append("Estado", state);
        formData.append("Cep", cep);
        formData.append("Logradouro", street);
        formData.append("DataNascimento", birth);
        formData.append("Cpf", cpf);
        formData.append("Nome", name);
        formData.append("Numero", number);
        formData.append("Email", email);

        await api.put(`Pacientes?idUsuario=${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(response => {
            console.log(response);
            navigation.replace("UserProfile");
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <ContainerImage>
                <ImageContainer source={{ uri: photo }} />

                {editProfile ? (
                    <></>
                ) : (
                    <ButtonCamera onPress={handleOpenModal}>
                        <MaterialCommunityIcons name="camera-plus" size={20} color="#fbfbfb" />
                    </ButtonCamera>
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
                            onChangeText={(txt) => setBirth(formatBirth(txt))} keyboardType="numeric" size="100%" placeholder="Data de Nascimento" />
                    ) : (
                        <></>
                    )}

                    {editProfile ? (
                        <Input value={cpf}
                            onChangeText={(txt) => setCpf(formatCPF(txt))} keyboardType="numeric" size="100%" placeholder="Cpf" />
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
                            onChangeText={(txt) => setCep(formatCEP(txt))} keyboardType="numeric" size="100%" placeholder="Cep" />
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