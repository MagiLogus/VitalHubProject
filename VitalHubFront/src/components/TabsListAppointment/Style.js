import styled from 'styled-components/native';

export const ButtonTabsStyle = styled.TouchableHighlight.attrs(props => ({
    underlayColor: props.clickButton ? '#496BBA' : '#FBFBFB'
}))`
    padding: 12px 14px;
    border-radius: 5px;
    background-color: ${props => props.clickButton ? '#496BBA' : '#FBFBFB'};
    border: 2px solid ${props => props.clickButton ? '#496BBA' : '#607EC5'};
`;

export const ButtonTextStyle = styled.Text`
    font-size: 12px;
    font-family: "MontserratAlternates_600SemiBold";
    color: ${props => props.clickButton ? '#FBFBFB' : '#607EC5'};
`;

