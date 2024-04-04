import { DoctorCard, ImageDoctor, TextContainer } from "../Container/Style";
import { DoctorSubtitle, TitleDoctor } from "../Title/Style";

export const SelectDoctorCard = ({ name, specialty, selected, onPress }) => {

    return (
        <DoctorCard selected={selected} onPress={onPress}>
            <ImageDoctor source={require("../../assets/images/dra_alessandra.png")} />
            <TextContainer>
                <TitleDoctor>{name}</TitleDoctor>
                <DoctorSubtitle>{specialty}</DoctorSubtitle>
            </TextContainer>
        </DoctorCard>
    );
};