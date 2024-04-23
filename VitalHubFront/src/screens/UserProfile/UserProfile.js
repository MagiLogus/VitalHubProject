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

export const UserProfile = ({ navigation }) => {
    const [profile, setProfile] = useState([]);
    const [id, setId] = useState("");
    const [tokenLoad, setTokenLoad] = useState(false);

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
            } catch {
                console.log("error");
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

    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <ContainerImage>
                <ImageContainer source={require("../../assets/images/user_profile.png")} />
                <ButtonCamera>
                    <MaterialCommunityIcons name="camera-plus" size={20} color="#fbfbfb" />
                </ButtonCamera>
            </ContainerImage>
            <ScrollViewContainer>
                <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false} overScrollMode="never">
                    <Title>{profile && profile.idNavigation ? profile.idNavigation.nome : ""}</Title>
                    <EmailTitle>{profile && profile.idNavigation ? profile.idNavigation.email : ""}</EmailTitle>
                    <TextBoxContainer>
                        <TextBoxTitle>Data de Nascimento:</TextBoxTitle>
                        <TextBoxArea>
                            <TextBoxText>{profile ? new Date(profile.dataNascimento).toLocaleDateString() : ""}</TextBoxText>
                        </TextBoxArea>
                    </TextBoxContainer>
                    <TextBoxContainer>
                        <TextBoxTitle>CPF:</TextBoxTitle>
                        <TextBoxArea>
                            <TextBoxText>{profile && profile.cpf ? profile.cpf.substring(0, 3) + '.***.***-**' : ""}</TextBoxText>
                        </TextBoxArea>
                    </TextBoxContainer>
                    <TextBoxContainer>
                        <TextBoxTitle>Endereço:</TextBoxTitle>
                        <TextBoxArea>
                            <TextBoxText>{profile.endereco ? `${profile.endereco.logradouro}, ${profile.endereco.numero}` : ""}</TextBoxText>
                        </TextBoxArea>
                    </TextBoxContainer>
                    <TextBoxContainerRow>
                        <TextBoxContainer fieldWidth={45}>
                            <TextBoxTitle>Cep:</TextBoxTitle>
                            <TextBoxArea >
                                <TextBoxText>{profile.endereco ? profile.endereco.cep : ""}</TextBoxText>
                            </TextBoxArea>
                        </TextBoxContainer>
                        <TextBoxContainer fieldWidth={45}>
                            <TextBoxTitle>Cidade:</TextBoxTitle>
                            <TextBoxArea >
                                <TextBoxText>Moema-SP</TextBoxText>
                            </TextBoxArea>
                        </TextBoxContainer>
                    </TextBoxContainerRow>
                    <Button>
                        <ButtonTitle>Salvar</ButtonTitle>
                    </Button>
                    <Button>
                        <ButtonTitle>Editar</ButtonTitle>
                    </Button>
                    <ButtonLogoff onPress={Logoff}>
                        <ButtonTitle>Sair do APP</ButtonTitle>
                    </ButtonLogoff>
                </ScrollView>
            </ScrollViewContainer>
        </Container>
    );
};