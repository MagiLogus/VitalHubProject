import { StatusBar } from "expo-status-bar";
import { Button } from "../../components/Button/Style";
import { Container, ContentSubtitle } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { LinkAction } from "../../components/Links/Style";
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, Subtitle, Title } from "../../components/Title/Style";

export const CreateAccount = ({ navigation }) => {
    async function Login() {
        navigation.replace("Login")
    }
    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <Logo />
            <Title>Criar Conta</Title>
            <ContentSubtitle>
                <Subtitle>Insira seu endereço de e-mail e senha para realizar seu cadastro</Subtitle>
            </ContentSubtitle>
            <Input placeholder="Usuário ou E-mail" />
            <Input placeholder="Senha" />
            <Input placeholder="Confirmar Senha" />
            <Button width={"90%"} onPress={() => Login()}>
                <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>
            <LinkAction onPress={() => Login()}>Cancelar</LinkAction>
        </Container>
    );
};