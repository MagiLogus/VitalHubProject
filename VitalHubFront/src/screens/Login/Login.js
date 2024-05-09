import { StatusBar } from "expo-status-bar";
import { Button } from "../../components/Button/Style";
import { Container, TextAlertContainer } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { LinkBold, LinkMedium } from "../../components/Links/Style";
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, Title } from "../../components/Title/Style";
import { ContentAccount, TextAccount, TextAlert } from "./Style";
import { React, useState } from "react";
import { api, loginResource } from "../../service/service";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { ActivityIndicator } from 'react-native';


export const Login = ({ navigation }) => {
    const [email, setEmail] = useState('joao@email.com');
    const [senha, setSenha] = useState('123456');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    async function Login() {
        try {
            setLoading(true);

            const response = await api.post(loginResource, {
                email: email,
                senha: senha
            });

            await AsyncStorage.setItem('token', JSON.stringify(response.data));

            setLoading(false);

            navigation.replace("Main");
            console.log(response.data);
        } catch (error) {
            console.log(error);
            setLoading(true);
            setErrorMessage("Erro ao fazer login. Por favor, verifique suas credenciais e tente novamente.");
            setTimeout(() => {
                setErrorMessage("");
                setLoading(false);
            }, 3000);
        }
    }

    async function PasswordRecover() {
        navigation.replace("PasswordRecover")
    }

    async function CreateAccount() {
        navigation.replace("CreateAccount")
    }

    function ErrorMessage({ message }) {
        return (
            <TextAlertContainer>
                <TextAlert>{message}</TextAlert>
            </TextAlertContainer>
        );
    }

    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <Logo />
            <Title>Entrar ou Criar Conta</Title>
            <Input placeholder="Usuário ou E-mail"
                value={email}
                onChangeText={(txt) => setEmail(txt)}
            />
            <Input placeholder="Senha" secureTextEntry
                value={senha}
                onChangeText={(txt) => setSenha(txt)}
            />
            <LinkMedium onPress={() => PasswordRecover()}>Esqueceu sua senha?</LinkMedium>
            <Button width="90%" onPress={() => { Login() }}>
                {loading && <ActivityIndicator size="small" color="#fff" />}
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>
            {errorMessage && <ErrorMessage message={errorMessage} />}
            <ContentAccount>
                <TextAccount>Não tem conta? <LinkBold onPress={() => CreateAccount()}>Crie uma conta agora!</LinkBold></TextAccount>
            </ContentAccount>
        </Container>
    );
};
