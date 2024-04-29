import styled from "styled-components";


export const PatientModal = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ConteinerConfirm = styled(PatientModal)``;

export const ContainerTextConfirm = styled.View`
  width: 250px;
`;
export const TextConfirm = styled.Text`
  font-size: 20px;
  font-family: "MontserratAlternates_600SemiBold";
  text-align: center;
`;
export const TextConfirm2 = styled.Text`
  font-size: 16px;
  font-family: "Quicksand_500Medium";
  text-align: center;
  margin-top: 16px;
  margin-bottom: 30px;
`;

export const TextInfo = styled.Text`
  font-size: 14px;
  font-family: "Quicksand_500Medium";
  margin-top: 8px;
  margin-bottom: 20px;
`;

export const ContainerConfirm2 = styled.View`
  align-self: flex-start;
`;

export const ContainerConfirm3 = styled.View`

`;

export const TextConfirm3 = styled.Text`
  font-size: 16px;
  font-family: "Quicksand_600SemiBold";
`;


export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 44px;
  background-color: #496bba;
  justify-content: center;
  align-items: center;
  border-color: #496bba;
  border-radius: 5px;
  margin-top: 15px;
`;

export const ButtonModalDoctor = styled(Button)`
    width: 100%;
    
`;

export const ButtonTitle = styled.Text`
  font-size: 16px;
  font-family: "MontserratAlternates_700Bold";
  color: #ffffff;
`;

export const ButtonTitleDoctor = styled(ButtonTitle)`
    font-family: "MontserratAlternates_700Bold";
`;

export const ContentAccount = styled.TouchableOpacity`
    flex-direction: row;
    margin-top: 30px;
`

export const LinkMedium = styled.Text`
  font-size: 16px;
  font-family: "MontserratAlternates_500Medium";
  color: #8c8a97;
  margin-top: 10px;
  margin-bottom: 15px;
  align-self: flex-start;
  margin-left: 20px;
  text-decoration: underline;
`;
export const LinkAccount = styled(LinkMedium)`
  margin-top: 0;
  color: #4d659d;
  font-family: "MontserratAlternates_600SemiBold";
  margin-left: 5px;
`;

export const ModalContent2 = styled.View`
  width: 90%;
  padding: 30px 30px 10px;
  border-radius: 10px;
  background-color: #fff;
  align-items: center;
`;