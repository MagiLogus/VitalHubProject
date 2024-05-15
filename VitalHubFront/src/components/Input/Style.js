import styled from 'styled-components/native';

export const Input = styled.TextInput.attrs({ placeholderTextColor: '#34898F' })`
    width: ${({ size }) => (size ? size : '90%')};
    height: ${({ height }) => (height ? height : '53px')}; /* Adicionando altura variável */
    padding: 16px;
    margin-top: 20px;
    border: 2px solid #49B3BA;
    border-radius: 5px;
    color: #49B3BF;
    font-size: 16px;
    font-family: "MontserratAlternates_600SemiBold";
`;

export const VerificationInput = styled.TextInput.attrs({ placeholderTextColor: '#34898F' })`
  width: 18%;
  height: 62px;
  padding: 5px 20px 5px 20px;
  border: 2px solid ${(props) => props.isFocused ? '#000000' : '#77CACF'};
  border-radius: 5px;
  color: #34898F;
  font-size: 40px;
  font-family: "Quicksand_600SemiBold";
`

