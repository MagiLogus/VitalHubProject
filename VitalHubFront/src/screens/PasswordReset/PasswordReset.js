import { StatusBar } from "expo-status-bar";
import { Button } from "../../components/Button/Style";
import { Container, ContentSubtitle } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, Subtitle, Title } from "../../components/Title/Style";
import { api } from "../../service/service";
import { useState } from "react";

export const PasswordReset = ({ navigation, route }) => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    async function UpdatePassword() {
        if (password === newPassword) {
            await api.put(`/Usuario/AlterarSenha?email=${route.params.email}`, {
                senhaNova: password
            }).then(() => {
                navigation.replace("Login")
            }).catch(error => {
                console.log(error);
            })
        }
    }

    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <Logo />
            <Title>Redefinir Senha</Title>
            <ContentSubtitle>
                <Subtitle>Insira e confirme a sua nova senha</Subtitle>
            </ContentSubtitle>
            <Input placeholder="Nova Senha" value={password} onChangeText={(txt) => setPassword(txt)} />
            <Input placeholder="Confirmar Nova Senha" value={newPassword} onChangeText={(txt) => setNewPassword(txt)} />
            <Button width={"90%"} onPress={() => UpdatePassword()}>
                <ButtonTitle>Confirmar Nova Senha</ButtonTitle>
            </Button>
        </Container>
    );
};