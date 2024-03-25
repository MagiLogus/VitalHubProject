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
  navigation
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  async function navigateBasedOnProfile() {
    if (profile === 'Médico') {
      await navigation.replace("ViewPrescription");
    } else {
      await navigation.replace("ConfirmMedicalRecord");
    }
  }

  return (
    <>
      <ContainerCardsList onPress={() => setModalVisible(true)}>
        <ProfileImage src={imageSource} />
        <ContentCard>
          <ProfileName>{name}</ProfileName>
          <ProfileData>
            <TextAge>{age} Ano(s)</TextAge>
            <Dot />
            <TextBold>{level}</TextBold>
          </ProfileData>
          <ViewRow>
            <ClockCard situacao={situacao}>
              <AntDesign
                name="clockcircle"
                size={14}
                color={situacao == "pendente" ? "#49B3BA" : "#4E4B59"}
              />
              <TextTime situacao={situacao} >
                14:00
              </TextTime>
            </ClockCard>
            {
              situacao == "cancelado" ? (
                <>
                </>
              ) : situacao == "pendente" ? (
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
        visible={modalVisible}
        setShowModalAppointment={setModalVisible}
        imageSource={imageSource}
        name={name}
        navigation={navigation}
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
