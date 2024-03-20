import { StatusBar } from "expo-status-bar";
import { Button, ButtonGoogle } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { GoogleIcon } from "../../components/Icons/Style";
import { Input } from "../../components/Input/Style";
import { LinkBold, LinkMedium } from "../../components/Links/Style";
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, ButtonTitleGoogle, Title } from "../../components/Title/Style";
import { ContentAccount, TextAccount } from "./Style";

export const Login = ({ navigation }) => {
    async function Login() {
        navigation.replace("Main")
    }
    async function PasswordRecover() {
        navigation.replace("PasswordRecover")
    }
    async function CreateAccount() {
        navigation.replace("CreateAccount")
    }
    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <Logo />
            <Title>Entrar ou Criar Conta</Title>
            <Input placeholder="Usuário ou E-mail" />
            <Input placeholder="Senha" secureTextEntry />
            <LinkMedium onPress={() => PasswordRecover()}>Esqueceu sua senha?</LinkMedium>
            <Button width="90%" onPress={() => Login()}>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>
            <ButtonGoogle width="90%">
                <GoogleIcon />
                <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
            </ButtonGoogle>
            <ContentAccount>
                <TextAccount>Não tem conta? <LinkBold onPress={() => CreateAccount()}>Crie uma conta agora!</LinkBold></TextAccount>
            </ContentAccount>
        </Container>
    );
};