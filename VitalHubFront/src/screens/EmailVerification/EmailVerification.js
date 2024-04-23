import { StatusBar } from "expo-status-bar";
import { Button } from "../../components/Button/Style";
import { Container, ContentSubtitle, InputContainer } from "../../components/Container/Style";
import { VerificationInput } from "../../components/Input/Style";
import { LinkAction } from "../../components/Links/Style";
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, Subtitle, SubtitleFocus, Title } from "../../components/Title/Style";
import { useEffect, useRef, useState } from "react";
import { api } from "../../service/service";

export const EmailVerification = ({ navigation, route }) => {
    const [focusedIndex, setFocusedIndex] = useState(0);
    const [code, setCode] = useState('');
    const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)];


    function focusNextInput(index) {
        if (index < inputs.length - 1) {
            inputs[index + 1].current.focus()
        }
        setFocusedIndex(index + 1);
    }

    function focusPrevInput(index) {
        if (index > 0) {
            inputs[index - 1].current.focus()
        }
        setFocusedIndex(index - 1);
    }

    async function ValidatePassword() {
        await api.post(`/RecuperarSenha/ValidarCodigo?email=${route.params.email}&codigo=${code}`)
            .then(() => {
                navigation.replace("PasswordReset", { email: route.params.email })
            }).catch(error => {
                console.log(error)
                console.log(route.params.email);
                console.log(code);
            })
    }

    useEffect(() => {
        inputs[0].current.focus()
    }, [])

    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <Logo />
            <Title>Verifique Seu E-mail</Title>
            <ContentSubtitle>
                <Subtitle>Digite o código de 4 dígitos enviado para <SubtitleFocus>{route.params.email}</SubtitleFocus></Subtitle>
            </ContentSubtitle>
            <InputContainer>
                {
                    [0, 1, 2, 3].map((index) => (
                        <VerificationInput isFocused={focusedIndex === index} key={index} ref={inputs[index]} keyboardType="numeric" placeholder="0" maxLength={1} caretHidden={true}
                            onChangeText={(text) => {
                                if (text == "") {
                                    focusPrevInput(index)
                                } else {
                                    const newCode = [...code]
                                    newCode[index] = text
                                    setCode(newCode.join(''))
                                    focusNextInput(index)
                                    text ? focusNextInput(index) : focusPrevInput(index);
                                }
                            }}
                        />
                    ))
                }
            </InputContainer>
            <Button width={"90%"} onPress={() => ValidatePassword()}>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>
            <LinkAction>Voltar</LinkAction>
        </Container>
    );
};