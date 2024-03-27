import styled, { css } from "styled-components/native";

export const ModalContent = styled.View`
  flex: 1;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ViewContainer = styled.View`
  height:518px;
  width: 100%;
  bottom: 0px;
  z-index: 99;
  border-radius: 10px 10px 0px;
  position: absolute;
  background-color:#FBFBFB;
  align-items: center;
`;

export const ViewOption = styled.View`
  margin-top: 10px;
  width: 90%;
justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.Text`
margin-top: 30px;
  align-self: center;
  font-size: 20px; 
  color: #33303E;
  font-family: "MontserratAlternates_600SemiBold";
`;

export const Label = styled.Text`
  width: 90%;
  color: #33303E;
  font-size: 16px;
  margin-top: 20px;
  align-self: center;
  font-family: "Quicksand_600SemiBold";
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#34898F'
})`
  width: 90%;
  height: 55px;
  padding: 16px;
  margin-top: 10px;
  color: #34898f;
  border-radius: 5px;
  background-color: #FAFAFA;
  border: 2px solid #49b3ba;
  font-family: "MontserratAlternates_600SemiBold";
`;

export const InputCheckbox = styled.TouchableOpacity`
  border-radius: 5px;
  padding: 10px 20px;
  ${props => props.optionSelected
    ? css`
      background-color: #49b3ba;
      border: 2px solid #fafafa;
    `
    : css`
      background-color: #FAFAFA;
      border: 2px solid #49b3ba;
    `
  }
`

export const TextInputCheckbox = styled.Text`
  font-size: 14px;
  color : #49b3ba;
  font-family: "MontserratAlternates_700Bold";

  ${props => props.optionSelected
    ? css`
      color: #FAFAFA;
    `
    : css`
      color: #49b3ba;
    `
  }
`