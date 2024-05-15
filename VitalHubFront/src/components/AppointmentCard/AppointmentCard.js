import { AntDesign } from "@expo/vector-icons";
import {
  ButtonCard,
  ButtonText,
  ClockCard,
  ContainerCardsList,
  ContentCard,
  ProfileData,
  ProfileImage,
  ProfileName,
  TextAge,
  TextBold,
  TextTime,
  ViewRow,
} from "./Style";
import { Dot } from "../Icons/Style";
import { useState } from "react";
import { AppointmentModal } from "../AppointmentModal/AppointmentModal";

export const AppointmentCard = ({
  situacao,
  onPressCancel,
  onPressAppointment,
  imageSource,
  name,
  age,
  level,
  email,
  profile,
  speciality,
  crm,
  navigation,
  clinicId,
  hour,
  appointmentId
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  async function navigateBasedOnProfile() {
    if (profile === 'Medico') {
      await navigation.replace("ViewPrescription");
    } else {
      await navigation.replace("ConfirmMedicalRecord", { appointmentId: appointmentId });
    }
  }

  return (
    <>
      <ContainerCardsList onPress={() => setModalVisible(true)}>
        <ProfileImage source={{ uri: imageSource }} />
        <ContentCard>
          <ProfileName>{profile === "Medico" ? "Dr(a). " : ""}{name}</ProfileName>
          <ProfileData>
            {profile === 'Pacientes' ? (
              <TextAge>{age} Ano(s)</TextAge>
            ) : (
              <TextAge>CRM-{crm}</TextAge>
            )}
            <Dot />
            <TextBold>{level === 0 ? 'Rotina' : level === 1 ? 'Exame' : 'Urgência'}</TextBold>
          </ProfileData>
          <ViewRow>
            <ClockCard situacao={situacao}>
              <AntDesign
                name="clockcircle"
                size={14}
                color={situacao == "Pendentes" ? "#49B3BA" : "#4E4B59"}
              />
              <TextTime situacao={situacao} >
                {hour}
              </TextTime>
            </ClockCard>
            {
              situacao == "Cancelados" ? (
                <>
                </>
              ) : situacao == "Pendentes" ? (
                <ButtonCard onPress={onPressCancel}>
                  <ButtonText situacao={situacao}>Cancelar</ButtonText>
                </ButtonCard>
              ) : (
                <ButtonCard onPress={navigateBasedOnProfile}>
                  <ButtonText situacao={situacao}>Ver Prontuário</ButtonText>
                </ButtonCard>
              )
            }
          </ViewRow>
        </ContentCard>
      </ContainerCardsList>
      <AppointmentModal
        appointmentId={appointmentId}
        visible={modalVisible}
        setShowModalAppointment={setModalVisible}
        imageSource={imageSource}
        name={name}
        navigation={navigation}
        clinicId={clinicId}
        age={age}
        email={email}
        profile={profile}
        speciality={speciality}
        crm={crm}
        situacao={situacao}
        level={level}
      />
    </>
  );
};
