import { useState } from "react";
import { DoctorCard, ImageDoctor, TextContainer } from "../Container/Style";
import { DoctorSubtitle, TitleDoctor } from "../Title/Style";

export const SelectDoctorCard = ({ name, specialty, select }) => {

    return (
        <DoctorCard >
            <ImageDoctor source={require("../../assets/images/dra_alessandra.png")} />
            <TextContainer>
                <TitleDoctor>{name}</TitleDoctor>
                <DoctorSubtitle>{specialty}</DoctorSubtitle>
            </TextContainer>
        </DoctorCard>
    );
};