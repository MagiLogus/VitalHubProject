import { AgeContainer, Container, MapInformation, MapInformationContainer, TextBoxArea, TextBoxContainer, TextBoxContainerRow } from "../../components/Container/Style";
import { Map } from '../../components/Map/Style';
import { Marker } from 'react-native-maps';
import { AgeTitle, TextBoxText, TextBoxTitle, Title } from "../../components/Title/Style";
import { LinkAction } from "../../components/Links/Style";

export const ConsultationLocal = ({ navigation }) => {
  async function PacientAppointments() {
    navigation.replace("PacientAppointments")
  }
  return (
    <Container>
      <Map
        initialRegion={{
          latitude: -23.6152959,
          longitude: -46.5708332,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: -23.6152959,
            longitude: -46.5708332,
          }}
          title="Niteroi, 180"
          description="São Caetano do Sul, São Paulo"
        />
      </Map>
      <MapInformation>
        <MapInformationContainer>
          <Title>Clínica Natureh</Title>
          <AgeContainer>
            <AgeTitle>São Paulo, SP</AgeTitle>
          </AgeContainer>
          <TextBoxContainer>
            <TextBoxTitle>Endereço:</TextBoxTitle>
            <TextBoxArea>
              <TextBoxText>Rua Vicenso Silva, 987</TextBoxText>
            </TextBoxArea>
          </TextBoxContainer>
          <TextBoxContainerRow>
            <TextBoxContainer fieldWidth={45}>
              <TextBoxTitle>Número:</TextBoxTitle>
              <TextBoxArea >
                <TextBoxText>578</TextBoxText>
              </TextBoxArea>
            </TextBoxContainer>
            <TextBoxContainer fieldWidth={45}>
              <TextBoxTitle>Bairro:</TextBoxTitle>
              <TextBoxArea >
                <TextBoxText>Moema-SP</TextBoxText>
              </TextBoxArea>
            </TextBoxContainer>
          </TextBoxContainerRow>
          <LinkAction onPress={() => PacientAppointments()}>Voltar</LinkAction>
        </MapInformationContainer>
      </MapInformation>
    </Container>
  );
};

