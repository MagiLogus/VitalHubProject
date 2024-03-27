import styled from "styled-components";

export const InputWithTitleContent = styled.View`
    align-items: flex-start;
`
export const TitleWithInput = styled.Text`
    font-family: "Quicksand_600SemiBold";
    font-size: 16px;
    margin-bottom: 10px;
`
export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#34898f"
  })`
    width: 90%;
    height: 53px;
    padding: 16px;
    margin-top: 10px;
    border: 2px solid #49b3ba;
    border-radius: 5px;
    color: #34898f;
    font-size: 16px;
    font-family: "MontserratAlternates_600SemiBold";
  `;

export const InputLarge = styled(Input)`
  width: 100%;
  height: 121px;
  padding-bottom: 84px; 
  margin-bottom: 10px;
`

export const InputMedium = styled(InputLarge)`
  height: 53px;
  padding-bottom: 16px;
`