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

export const AppointmentCard = ({
  situacao,
  onPressCancel,
  onPressAppointment,
  imageSource,
  name,
  age,
  level
}) => {
  return (
    <ContainerCardsList>
      <ProfileImage src={imageSource} />
      <ContentCard>
        <ProfileName>{name}</ProfileName>
        <ProfileData>
          <TextAge>{age}</TextAge>
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
              <ButtonCard onPress={onPressAppointment}>
                <ButtonText situacao={situacao}>Ver Prontuário</ButtonText>
              </ButtonCard>
            )
          }
        </ViewRow>
      </ContentCard>
    </ContainerCardsList>
  );
};
