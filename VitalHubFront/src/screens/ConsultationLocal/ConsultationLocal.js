import { AgeContainer, Container, MapInformation, MapInformationContainer, TextBoxArea, TextBoxContainer, TextBoxContainerRow } from "../../components/Container/Style";
import { Map } from '../../components/Map/Style';
import { Marker } from 'react-native-maps';
import { AgeTitle, TextBoxText, TextBoxTitle, Title } from "../../components/Title/Style";
import { LinkAction } from "../../components/Links/Style";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { api } from "../../service/service";

export const ConsultationLocal = ({ navigation, route }) => {
  const { clinicId } = route.params;
  const [clinicLocation, setClinicLocation] = useState([]);

  useEffect(() => {
    if (clinicId) {
      searchClinic();
    }
  }, [clinicId]);

  async function searchClinic() {
    try {
      const response = await api.get(`/Clinica/BuscarPorId?id=${clinicId}`);
      setClinicLocation(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function Main() {
    navigation.replace("Main");
  }

  if (clinicLocation.length === 0) {
    return null;
  }

  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <Map
        initialRegion={{
          latitude: clinicLocation.endereco?.latitude,
          longitude: clinicLocation.endereco?.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: clinicLocation.endereco?.latitude,
            longitude: clinicLocation.endereco?.longitude,
          }}
        />
      </Map>
      <MapInformation>
        <MapInformationContainer>
          <Title>{clinicLocation.nomeFantasia}</Title>
          <AgeContainer>
            <AgeTitle>São Paulo, SP</AgeTitle>
          </AgeContainer>
          <TextBoxContainer>
            <TextBoxTitle>Endereço:</TextBoxTitle>
            <TextBoxArea>
              <TextBoxText>{clinicLocation.endereco?.logradouro}</TextBoxText>
            </TextBoxArea>
          </TextBoxContainer>
          <TextBoxContainerRow>
            <TextBoxContainer fieldWidth={45}>
              <TextBoxTitle>Número:</TextBoxTitle>
              <TextBoxArea >
                <TextBoxText>{clinicLocation.endereco?.numero.toString()}</TextBoxText>
              </TextBoxArea>
            </TextBoxContainer>
            <TextBoxContainer fieldWidth={45}>
              <TextBoxTitle>Bairro:</TextBoxTitle>
              <TextBoxArea >
                <TextBoxText>Moema-SP</TextBoxText>
              </TextBoxArea>
            </TextBoxContainer>
          </TextBoxContainerRow>
          <LinkAction onPress={Main}>Voltar</LinkAction>
        </MapInformationContainer>
      </MapInformation>
    </Container>
  );
};