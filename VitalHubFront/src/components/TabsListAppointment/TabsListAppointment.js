import { ButtonTabsStyle, ButtonTextStyle } from "./Style";

export const TabsListAppointment = ({ textButton, clickButton = false, onPress }) => {
    return (
        <ButtonTabsStyle clickButton={clickButton} onPress={onPress}>
            <ButtonTextStyle clickButton={clickButton}>{textButton}</ButtonTextStyle>
        </ButtonTabsStyle>
    );
};

