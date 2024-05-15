import styled from "styled-components";
import Arrowselect from "../../assets/images/setaselect.svg"

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #FAFAFA;
`
export const IconSelect = styled(Arrowselect)`
    width: 22px;
    height: 22px;
    position: relative;
    top: 15px;
    left: -15px;
`

export const SelectPicker = styled.View`
    width: 100%;
    height: 53px;
    border-radius: 5px;
    border: solid 2px #60BFC5;
    justify-content: space-between;
    margin-bottom: 20px;
`

export const Title = styled.Text`
    font-size: 20px;
    color: #33303e;
    font-family: "MontserratAlternates_600SemiBold";

    margin-bottom: 5px;
`

export const TitleSelectClinic = styled(Title)`
    margin: 72px 0px 35px 0px;
`
export const TitleWithInput = styled.Text`
    font-family: "Quicksand_600SemiBold";
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 10px;
`
export const ContentLinkCenter = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
`
export const InputWithTitleContent = styled.View`
    width: 320px;
    align-items: flex-start;
`
export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 44px;
    
    background-color: #496BBA;
    border-radius: 5px;
    
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`
export const ButtonMedicalRecord = styled(Button)`
    width: 100%;
    margin-top: 10px;
`
export const ButtonTitle = styled.Text`
    color: #FFFFFF;
    font-family: 'MontserratAlternates_700Bold';
    font-size: 16px;
    text-align: center;
    text-transform: uppercase;
`
export const TextAccount = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 14px;
    margin-left: 5px;
`
export const LinkBlueMontserrat = styled(TextAccount)`
    color: #4D659D;
    text-decoration: underline;
`


export const LinkBlueMontserratMargin = styled(LinkBlueMontserrat)`
    margin-top: 30px;
`