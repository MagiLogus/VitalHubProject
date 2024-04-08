import { StatusBar } from "expo-status-bar";
import { Button } from "../../components/Button/Style";
import { Container, ContentSubtitle } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { LinkAction } from "../../components/Links/Style";
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, Subtitle, Title } from "../../components/Title/Style";
import { useState } from "react";
import { api, CreateAccountResource } from "../../service/service";
import { ActivityIndicator } from "react-native";

export const CreateAccount = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    async function Cancel() {
        navigation.replace("Login")
    }

    async function CreateUser() {
        if (!email || !password || !confirmPassword) {
            console.log('Por favor, preencha todos os campos.');
            return;
        }

        if (password !== confirmPassword) {
            console.log('As senhas não coincidem.');
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
                nome: "string",
                email: email,
                senha: password,
                idTipoUsuario: "41BA08AE-915B-4913-B3EB-45A19E8172E0",
                foto: "string"
            });
            console.log("Usuário criado com sucesso:", response.data);
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setLoading(false);
        } catch (error) {
            console.error("Erro ao criar usuário:", error.message);
            setLoading(false);
        }
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
                placeholder="Usuário ou E-mail"
                value={email}
                onChangeText={(txt) => setEmail(txt)}
            />
            <Input
                placeholder="Senha"
                value={password}
                onChangeText={(txt) => setPassword(txt)}
            />
            <Input
                placeholder="Confirmar Senha"
                value={confirmPassword}
                onChangeText={(txt) => setConfirmPassword(txt)}
            />
            <Button width={"90%"} onPress={() => CreateUser()}>
                {loading && <ActivityIndicator size="small" color="#fff" />}
                <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>
            <LinkAction onPress={Cancel}>Cancelar</LinkAction>
            <ErrorMessage message={errorMessage} />
        </Container>
    );
};