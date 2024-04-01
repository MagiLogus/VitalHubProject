import React, { useEffect, useState } from "react";
import { ScrollView, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProfileResource, api, userResource } from "../../service/service"; 
import { Button, ButtonLogoff } from "../../components/Button/Style";
import { Container, ImageContainer, ScrollViewContainer, TextBoxArea, TextBoxContainer, TextBoxContainerRow } from "../../components/Container/Style";
import { ButtonTitle, EmailTitle, TextBoxText, TextBoxTitle, Title } from "../../components/Title/Style";
import { userDecodeToken } from "../../utils/Auth";

export const UserProfile = ({ navigation }) => {
    const [user, setUser] = useState({});
    const [profile, setProfile] = useState({});

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
            const response = await api.get(`${ProfileResource}?id=${user.id}`); 
            const data = response.data;
            setProfile(data);
            console.log(data);
        }
        if (user.id) { // Adicionar verificação se user.id está definido
            ListUserProfile();
        }
    }, [user.id]); // Adicionar user.id como dependência do useEffect

    async function Logoff() {
        await AsyncStorage.removeItem('token');
        console.log('Token removido com sucesso.');
        navigation.replace("Login");
    }

    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageContainer source={require("../../assets/images/user_profile.png")} />
            <ScrollViewContainer>
                <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false} overScrollMode="never">
                    <Title>{profile.nome}</Title>
                    <EmailTitle>{profile.email}</EmailTitle>
                    <TextBoxContainer>
                        <TextBoxTitle>Data de Nascimento:</TextBoxTitle>
                        <TextBoxArea>
                            <TextBoxText>{profile.paciente?.dataNascimento ? new Date(profile.paciente.dataNascimento).toLocaleDateString() : 'Data de nascimento não disponível'}</TextBoxText>
                        </TextBoxArea>
                    </TextBoxContainer>
                    <TextBoxContainer>
                        <TextBoxTitle>CPF:</TextBoxTitle>
                        <TextBoxArea>
                            <TextBoxText>{profile.paciente?.cpf ? profile.paciente.cpf.substring(0, 3) + '*'.repeat(profile.paciente.cpf.length - 3) : 'CPF não disponível'}</TextBoxText>
                        </TextBoxArea>
                    </TextBoxContainer>
                    <TextBoxContainer>
                        <TextBoxTitle>Endereço:</TextBoxTitle>
                        <TextBoxArea>
                            <TextBoxText>{profile && profile.paciente && profile.paciente.endereco ? profile.paciente.endereco.logradouro : 'Endereço não disponível'}</TextBoxText>
                        </TextBoxArea>
                    </TextBoxContainer>
                    <TextBoxContainerRow>
                        <TextBoxContainer fieldWidth={45}>
                            <TextBoxTitle>Cep:</TextBoxTitle>
                            <TextBoxArea>
                                <TextBoxText>{profile && profile.paciente && profile.paciente.endereco ? profile.paciente.endereco.cep : 'Cep não disponível'}</TextBoxText>
                            </TextBoxArea>
                        </TextBoxContainer>
                        <TextBoxContainer fieldWidth={45}>
                            <TextBoxTitle>Cidade:</TextBoxTitle>
                            <TextBoxArea>
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
