import { StatusBar } from "expo-status-bar";
import { Button } from "../../components/Button/Style";
import { Container, ContentSubtitle } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, Subtitle, Title } from "../../components/Title/Style";
import { useState } from "react";
import { api } from "../../service/service";

export const PasswordRecover = ({ navigation }) => {
    const [email, setEmail] = useState('paulo.oliveira.phgo@gmail.com');

    async function SendEmail() {
        await api.post(`/RecuperarSenha?email=${email}`)
            .then(() => {
                navigation.replace("EmailVerification", { email: email });
            }).catch(error => {
                console.log(error);
            })
    }

    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <Logo />
            <Title>Recuperar Senha</Title>
            <ContentSubtitle>
                <Subtitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Subtitle>
            </ContentSubtitle>
            <Input placeholder="Usuário ou E-mail" value={email} onChangeText={(txt) => setEmail(txt)} />
            <Button width={"90%"} onPress={() => SendEmail()}>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>
        </Container>
    );
};