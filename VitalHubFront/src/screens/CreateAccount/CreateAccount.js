import { StatusBar } from "expo-status-bar";
import { Button } from "../../components/Button/Style";
import { Container, ContentSubtitle, TextAlertContainer } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { LinkAction } from "../../components/Links/Style";
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, Subtitle, Title } from "../../components/Title/Style";
import { useState } from "react";
import { api, CreateAccountResource } from "../../service/service";
import { ActivityIndicator } from "react-native";
import { TextAlert, TextSucess } from "../Login/Style";

export const CreateAccount = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [sucessMessage, setSucessMessage] = useState("");

    async function Cancel() {
        navigation.replace("Login")
    }

    async function CreateUser() {
        if (!email || !password || !confirmPassword) {
            setLoading(true);
            setErrorMessage('Por favor, preencha todos os campos.');
            setTimeout(() => {
                setErrorMessage("");
                setLoading(false);
            }, 3000);
            return;
        }

        if (password !== confirmPassword) {
            setLoading(true);
            setErrorMessage('As senhas não coincidem.');
            setTimeout(() => {
                setErrorMessage("");
                setLoading(false);
            }, 3000);
            return;
        }

        try {
            setLoading(true);
            const response = await api.post(CreateAccountResource, {
                rg: "string",
                cpf: "string",
                dataNascimento: "2024-04-08",
                cep: "string",
                logradouro: "string",
                numero: 0,
                nome: name,
                email: email,
                senha: password,
                idTipoUsuario: "41BA08AE-915B-4913-B3EB-45A19E8172E0",
                foto: "string"
            });
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setSucessMessage('Cadastro concluído!');
            setTimeout(() => {
                setLoading(false);
                setSucessMessage('');
            }, 3000);

        } catch (error) {
            setErrorMessage('Erro ao cadastrar.')
            setTimeout(() => {
                setLoading(false);
                setErrorMessage('')
            }, 3000);
        }
    }

    function ErrorMessage({ message }) {
        return (
            <TextAlertContainer>
                <TextAlert>{message}</TextAlert>
            </TextAlertContainer>
        );
    }

    function SucessMessage({ message }) {
        return (
            <TextAlertContainer>
                <TextSucess>{message}</TextSucess>
            </TextAlertContainer>
        );
    }

    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <Logo />
            <Title>Criar Conta</Title>
            <ContentSubtitle>
                <Subtitle>Insira seu endereço de e-mail e senha para realizar seu cadastro</Subtitle>
            </ContentSubtitle>
            <Input
                placeholder="Nome Completo"
                value={name}
                onChangeText={(txt) => setName(txt)}
            />
            <Input
                placeholder="E-mail"
                value={email}
                onChangeText={(txt) => setEmail(txt)}
            />
            <Input
                secureTextEntry
                placeholder="Senha"
                value={password}
                onChangeText={(txt) => setPassword(txt)}
            />
            <Input
                secureTextEntry
                placeholder="Confirmar Senha"
                value={confirmPassword}
                onChangeText={(txt) => setConfirmPassword(txt)}
            />
            {errorMessage && <ErrorMessage message={errorMessage} />}
            {sucessMessage && <SucessMessage message={sucessMessage} />}
            <Button width={"90%"} onPress={() => CreateUser()}>
                {loading && <ActivityIndicator size="small" color="#fff" />}
                <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>
            <LinkAction onPress={Cancel}>Voltar</LinkAction>
        </Container>
    );
};