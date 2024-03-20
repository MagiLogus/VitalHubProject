import { StatusBar } from "expo-status-bar";
import { Button } from "../../components/Button/Style";
import { Container, ContentSubtitle, InputContainer } from "../../components/Container/Style";
import { VerificationInput } from "../../components/Input/Style";
import { LinkAction } from "../../components/Links/Style";
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, Subtitle, SubtitleFocus, Title } from "../../components/Title/Style";

export const EmailVerification = ({ navigation }) => {
    async function PasswordReset() {
        navigation.replace("PasswordReset")
    }
    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <Logo />
            <Title>Verifique Seu E-mail</Title>
            <ContentSubtitle>
                <Subtitle>Digite o código de 4 dígitos enviado para <SubtitleFocus>username@email.com</SubtitleFocus></Subtitle>
            </ContentSubtitle>
            <InputContainer>
                <VerificationInput value={"0"} />
                <VerificationInput value={"0"} />
                <VerificationInput value={"0"} />
                <VerificationInput value={"0"} />
            </InputContainer>
            <Button width={"90%"} onPress={() => PasswordReset()}>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>
            <LinkAction>Reenviar Código</LinkAction>
        </Container>
    );
};