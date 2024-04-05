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

