import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const TopBar = styled(LinearGradient).attrs({
    colors: ['#60BFC5', '#496BBA'],
    start: { x: -0.05, y: 1.08 },
    end: { x: 1, y: 0 }
})`
width: 100%;
height: 144px;
border-radius: 0px 0px 15px 15px;
align-items: center;
elevation: 5;
`

