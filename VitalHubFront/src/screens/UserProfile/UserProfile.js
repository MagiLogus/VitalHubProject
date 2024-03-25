import { ScrollView, StatusBar } from "react-native";
import { Button, ButtonLogoff } from "../../components/Button/Style";
import { Container, ImageContainer, ScrollViewContainer, TextBoxArea, TextBoxContainer, TextBoxContainerRow } from "../../components/Container/Style";
import { ButtonTitle, EmailTitle, TextBoxText, TextBoxTitle, Title } from "../../components/Title/Style";
import { userDecodeToken } from "../../utils/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react";
import { api, userResource } from "../../service/service";

export const UserProfile = ({ navigation }) => {

    const [user, setUser] = useState([])

    async function profileLoad() {
        const token = await userDecodeToken();
        setUser(token);
        console.log(token);
    }

    useEffect(() => {
        profileLoad();
    }, []);

    useEffect(() => {
        async function ListUserProfile() {

            const response = await api.get(`${userResource}/${user.id}`);
            const data = response.data;
            setUserData(data);

        }

        ListUserProfile();
    }, []);

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
            <ImageContainer source={require("../../assets/images/user_profile.png")} />
            <ScrollViewContainer>
                <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false} overScrollMode="never">
                    <Title>{user.name}</Title>
                    <EmailTitle>{user.email}</EmailTitle>
                    <TextBoxContainer>
                        <TextBoxTitle>Data de Nascimento:</TextBoxTitle>
                        <TextBoxArea>
                            <TextBoxText>04/05/1999</TextBoxText>
                        </TextBoxArea>
                    </TextBoxContainer>
                    <TextBoxContainer>
                        <TextBoxTitle>CPF:</TextBoxTitle>
                        <TextBoxArea>
                            <TextBoxText>859********</TextBoxText>
                        </TextBoxArea>
                    </TextBoxContainer>
                    <TextBoxContainer>
                        <TextBoxTitle>Endereço:</TextBoxTitle>
                        <TextBoxArea>
                            <TextBoxText>Rua: Vicenso Silva, 987</TextBoxText>
                        </TextBoxArea>
                    </TextBoxContainer>
                    <TextBoxContainerRow>
                        <TextBoxContainer fieldWidth={45}>
                            <TextBoxTitle>Cep:</TextBoxTitle>
                            <TextBoxArea >
                                <TextBoxText>06548-909</TextBoxText>
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