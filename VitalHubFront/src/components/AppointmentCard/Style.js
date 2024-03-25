import styled from 'styled-components/native';

export const ContainerCardsList = styled.TouchableOpacity`
    width: 90% ;
    height: 102px;
    margin-top: 6px;
    margin-bottom: 6px;
    padding: 10px 10px;
    border-radius: 5px ;
    flex-direction: row ;
    background-color:#fff ;
    elevation :5;
`
export const ProfileImage = styled.Image`
    width: 77px ;
    height: 80px ;
    border-radius: 5px ;
`

export const ContentCard = styled.View`
width: 70%;
margin-left: 10px;
`
export const ProfileName = styled.Text`   
    font-size: 16px ;
    color: #33303E;
    font-family: "MontserratAlternates_600SemiBold";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 5px;
`
export const ProfileData = styled.View`
    flex-direction: row ;
    align-items: center;
    gap: 7px ;
`
export const TextAge = styled.Text`
    font-size: 14px ;
    color: #8C8A97;
    font-family: "Quicksand_400Regular";
`
export const TextBold = styled(TextAge)`
    font-family: "Quicksand_500Medium";
    color: #4E4B59 ;
`

export const TextTime = styled(TextAge)`
    font-family: "Quicksand_500Medium";
    color: ${(props) => props.situacao == "pendente" ? "#49B3BA" : "#4E4B59"} ;
`
export const ViewRow = styled.View`
    width: 100%;
    flex-direction: row ;
    align-items: center ;
    justify-content: space-between ;
    margin-top: 11px ;
`

export const ClockCard = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100px;
    height: 26px;
  justify-content: center;
    border-radius: 5px ;
    gap: 6px;
    background-color: ${(props) => props.situacao == "pendente" ? "#E8FCFD" : "#F1F0F5"} ;
`
export const ButtonCard = styled.TouchableOpacity`
`
export const ButtonText = styled.Text`
font-size: 14px;
font-family: "MontserratAlternates_500Medium";
    color: ${(props) => props.situacao == "pendente" ? "#C81D25" : "#344F8F"} ;
`


