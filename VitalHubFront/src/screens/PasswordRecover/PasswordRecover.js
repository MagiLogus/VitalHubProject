import { StatusBar } from "expo-status-bar";
import { Button } from "../../components/Button/Style";
import { Container, ContentSubtitle } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, Subtitle, Title } from "../../components/Title/Style";

export const PasswordRecover = ({ navigation }) => {
    async function EmailVerification() {
        navigation.replace("EmailVerification")
    }
    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <Logo />
            <Title>Recuperar Senha</Title>
            <ContentSubtitle>
                <Subtitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Subtitle>
            </ContentSubtitle>
            <Input placeholder="Usuário ou E-mail" />
            <Button width={"90%"} onPress={() => EmailVerification()}>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>
        </Container>
    );
};