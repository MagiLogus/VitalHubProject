import { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { ButtonMedicalRecord, ButtonTitle, Container, ContentLinkCenter, IconSelect, InputWithTitleContent, LinkBlueMontserratMargin, SelectPicker, TitleSelectClinic, TitleWithInput } from './Style';
import { CalendarChoose } from '../../components/CalendarChoose/CalendarChoose'
import { ConfirmModal } from '../../components/ConfirmModal/ConfirmModal';
import { StatusBar } from 'expo-status-bar';

export function SelectDate({ navigation }) {

    const [selectedValueTime, setSelectedValueTime] = useState("");
    const [showModalConfirm, setShowModalConfirm] = useState(false);

    const generateAvailableTime = () => {
        const availableTime = [];
        const startTime = 8 * 60; // Horário inicial em minutos (8:00 AM)
        const endTime = 20 * 60; // Horário final em minutos (8:00 PM)
        const interval = 30; // Intervalo em minutos

        for (let i = startTime; i <= endTime; i += interval) {
            const hour = Math.floor(i / 60);
            const minute = i % 60;
            const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            availableTime.push({ label: timeString, value: timeString });
        }

        return availableTime;
    };

    // Usando a função para gerar os horários disponíveis
    const availableTime = generateAvailableTime();

    async function NextPage() {
        navigation.replace("SelectDate");
    }

    async function OpenModal() {
        setShowModalConfirm(true);
    }

    async function CloseModal() {
        setShowModalConfirm(false);
    }

    async function Return() {
        navigation.replace("SelectDoctor");
    }

    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <TitleSelectClinic>Selecionar data</TitleSelectClinic>

            <CalendarChoose />

            <InputWithTitleContent style={{ width: '90%' }}>
                <TitleWithInput>Selecione um horário disponível</TitleWithInput>
            </InputWithTitleContent>

            <SelectPicker style={{ width: '90%' }}>
                <RNPickerSelect
                    onValueChange={(value) => setSelectedValueTime(value)}
                    items={availableTime}
                    placeholder={{ label: 'Selecionar horário', value: null }}
                    value={selectedValueTime}
                    style={{
                        inputAndroid: {
                            color: '#34898F',
                            fontFamily: 'MontserratAlternates_600SemiBold',
                            fontSize: 14,
                        },
                    }}
                    Icon={() => {
                        return <IconSelect />;
                    }}
                />
            </SelectPicker>

            <ButtonMedicalRecord onPress={OpenModal} style={{ width: '90%' }}>
                <ButtonTitle>Confirmar</ButtonTitle>
            </ButtonMedicalRecord>

            <ContentLinkCenter onPress={Return} style={{ width: '90%' }}>
                <LinkBlueMontserratMargin>Voltar</LinkBlueMontserratMargin>
            </ContentLinkCenter>

            <ConfirmModal
                visible={showModalConfirm}
                setShowModalConfirm={CloseModal}
                navigation={navigation}
            />
        </Container>
    );
}