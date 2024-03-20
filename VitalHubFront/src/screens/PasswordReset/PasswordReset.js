import { StatusBar } from "expo-status-bar";
import { Button } from "../../components/Button/Style";
import { Container, ContentSubtitle } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, Subtitle, Title } from "../../components/Title/Style";

export const PasswordReset = ({ navigation }) => {
    async function Login() {
        navigation.replace("Login")
    }
    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <Logo />
            <Title>Redefinir Senha</Title>
            <ContentSubtitle>
                <Subtitle>Insira e confirme a sua nova senha</Subtitle>
            </ContentSubtitle>
            <Input placeholder="Nova Senha" />
            <Input placeholder="Confirmar Nova Senha" />
            <Button width={"90%"} onPress={() => Login()}>
                <ButtonTitle>Confirmar Nova Senha</ButtonTitle>
            </Button>
        </Container>
    );
};