import { DoctorCard, ImageDoctor, TextContainer } from "../Container/Style";
import { DoctorSubtitle, TitleDoctor } from "../Title/Style";

export const SelectDoctorCard = ({ name, specialty, selected, onPress, source}) => {

    return (
        <DoctorCard selected={selected} onPress={onPress}>
            <ImageDoctor source={source} />
            <TextContainer>
                <TitleDoctor>{name}</TitleDoctor>
                <DoctorSubtitle>{specialty}</DoctorSubtitle>
            </TextContainer>
        </DoctorCard>
    );
};