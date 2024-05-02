import { useEffect, useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { ButtonMedicalRecord, ButtonTitle, Container, ContentLinkCenter, IconSelect, InputWithTitleContent, LinkBlueMontserratMargin, SelectPicker, TitleSelectClinic, TitleWithInput } from './Style';
import { CalendarChoose } from '../../components/CalendarChoose/CalendarChoose'
import { ConfirmModal } from '../../components/ConfirmModal/ConfirmModal';
import { StatusBar } from 'expo-status-bar';

export function SelectDate({ navigation, route }) {
    const [agendamento, setAgendamento] = useState(null);
    const [dataSelecionada, setDataSelecionada] = useState("");
    const [selectedValueTime, setSelectedValueTime] = useState("");
    const [showModalConfirm, setShowModalConfirm] = useState(false);

    const generateAvailableTime = () => {
        const availableTime = [];
        const startTime = 8 * 60;
        const endTime = 20 * 60;
        const interval = 30;

        for (let i = startTime; i <= endTime; i += interval) {
            const hour = Math.floor(i / 60);
            const minute = i % 60;
            const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            availableTime.push({ label: timeString, value: timeString });
        }

        return availableTime;
    };

    const availableTime = generateAvailableTime();

    async function OpenModal() {
   
    

        setShowModalConfirm(true);
         setAgendamento({
            ...route.params.agendamento,
            dataConsulta: `${dataSelecionada} ${selectedValueTime}`
        })
    }

    async function CloseModal() {
        setShowModalConfirm(false);
    }

    async function Cancel() {
        navigation.replace("Main");
    }
    useEffect(() => {
        console.log(route);
        console.log(dataSelecionada);
        console.log(selectedValueTime);
        console.log(agendamento);
    }, [route, dataSelecionada])

    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <TitleSelectClinic>Selecionar data</TitleSelectClinic>

            <CalendarChoose setDataSelecionada={setDataSelecionada} dataSelecionada={dataSelecionada} />

            <InputWithTitleContent style={{ width: '90%' }}>
                <TitleWithInput>Selecione um horário disponível:</TitleWithInput>
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

            <ContentLinkCenter onPress={Cancel} style={{ width: '90%' }}>
                <LinkBlueMontserratMargin>Cancelar</LinkBlueMontserratMargin>
            </ContentLinkCenter>

            {agendamento && (
                <ConfirmModal
                    agendamento={agendamento}
                    visible={showModalConfirm}
                    setShowModalConfirm={CloseModal}
                    navigation={navigation}
                />
            )}
        </Container>
    );
}