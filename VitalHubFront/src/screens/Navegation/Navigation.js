import { Button, View } from "react-native";

export const Navegation = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center ", gap: 5 }}>
            <Button title="Login" onPress={() => navigation.navigate("Login")} />
            <Button title="Recuperar Senha" onPress={() => navigation.navigate("PasswordRecover")} />
            <Button title="Redefinir Senha" onPress={() => navigation.navigate("PasswordReset")} />
            <Button title="Criar Conta" onPress={() => navigation.navigate("CreateAccount")} />
            <Button title="Verificar E-mail" onPress={() => navigation.navigate("EmailVerification")} />
            <Button title="Perfil" onPress={() => navigation.navigate("UserProfile")} />
            <Button title="Médico - Consultas" onPress={() => navigation.navigate("DoctorsAppointments")} />
            <Button title="Medico - Inserção Prontuário" onPress={() => navigation.navigate("ConfirmMedicalRecord")} />
            <Button title="Paciente - Consultas" onPress={() => navigation.navigate("PacientAppointments")} />
            <Button title="Medico - Visualiar Prescrição" onPress={() => navigation.navigate("ViewPrescription")} />
            <Button title="Medico - Local da Consulta" onPress={() => navigation.navigate("ConsultationLocal")} />
            <Button title="Selecionar Médico" onPress={() => navigation.navigate("SelectDoctor")} />
            <Button title="Selecionar Clínica" onPress={() => navigation.navigate("SelectClinic")} />
        </View>
    );
}