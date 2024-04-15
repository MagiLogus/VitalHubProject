import { AgeContainer, Container, MapInformation, MapInformationContainer, TextBoxArea, TextBoxContainer, TextBoxContainerRow } from "../../components/Container/Style";
import { Map } from '../../components/Map/Style';
import { Marker } from 'react-native-maps';
import { AgeTitle, TextBoxText, TextBoxTitle, Title } from "../../components/Title/Style";
import { LinkAction } from "../../components/Links/Style";
import { StatusBar } from "expo-status-bar";
import { api, locationResource } from "../../service/service";
import React, { useEffect, useState } from 'react';

export const ConsultationLocal = ({ navigation, route }) => {
  const clinicId = "b3fc583a-4d7b-437f-8f12-0dfd887598fe";
  const [clinicLocation, setClinicLocation] = useState({});

  useEffect(() => {
    if (clinicId) {
      searchClinic();
    }
  }, [clinicId]);

  async function searchClinic() {
    try {
      const response = await api.get(`/Clinica/BuscarPorId?id=${clinicId}`);
      setClinicLocation(response.data);
      console.log("Resposta da API:", response.data);
      console.log("Latitude Inicial:", response.data.endereco?.latitude);
      console.log("Longitude Inicial:", response.data.endereco?.longitude);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
   console.log("Dados da clínica:", clinicLocation);
  }, [clinicLocation]);

  async function Main() {
    navigation.replace("Main");
  }

  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <Map
        initialRegion={{
          latitude: clinicLocation.endereco?.latitude,
          longitude: clinicLocation.endereco?.longitude,
          
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

