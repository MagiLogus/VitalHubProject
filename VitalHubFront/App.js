import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './src/screens/Login/Login';
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import { PasswordRecover } from './src/screens/PasswordRecover/PasswordRecover';
import { PasswordReset } from './src/screens/PasswordReset/PasswordReset';
import { CreateAccount } from './src/screens/CreateAccount/CreateAccount';
import { EmailVerification } from './src/screens/EmailVerification/EmailVerification';
import { UserProfile } from './src/screens/UserProfile/UserProfile';
import { ConfirmMedicalRecord } from './src/screens/ConfirmMedicalRecord/ConfirmMedicalRecord';
import { Appointments } from './src/screens/Appointments/Appointments';
import { ViewPrescription } from './src/screens/ViewPrescription/ViewPrescription';
import { ConsultationLocal } from './src/screens/ConsultationLocal/ConsultationLocal';
import { SelectDoctor } from './src/screens/SelectDoctor/SelectDoctor';
import { SelectClinic } from './src/screens/SelectClinic/SelectClinic';
import { Main } from './src/screens/Main/Main';
import { InsertMedicalRecord } from './src/screens/InsertMedicalRecord/InsertMedicalRecord';
import { StatusBar } from 'expo-status-bar';


const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontsError] = useFonts({ MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_400Regular })

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <NavigationContainer>
       <StatusBar />
      <Stack.Navigator >
        <Stack.Screen name='Login' component={Login} options={{ title: 'Login', headerShown: false }} />
        <Stack.Screen name='PasswordRecover' component={PasswordRecover} options={{ title: 'Recuperar Senha', headerShown: false }} />
        <Stack.Screen name='PasswordReset' component={PasswordReset} options={{ title: 'Redefinir Senha', headerShown: false }} />
        <Stack.Screen name='CreateAccount' component={CreateAccount} options={{ title: 'Criar Conta', headerShown: false }} />
        <Stack.Screen name='EmailVerification' component={EmailVerification} options={{ title: 'Verificar E-mail', headerShown: false }} />
        <Stack.Screen name='UserProfile' component={UserProfile} options={{ title: 'Perfil', headerShown: false }} />
        <Stack.Screen name='ConfirmMedicalRecord' component={ConfirmMedicalRecord} options={{ title: 'Medico - Inserçáo Prontuário', headerShown: false }} />
        <Stack.Screen name='Appointments' component={Appointments} options={{ title: 'Paciente - Consultas', headerShown: false }} />
        <Stack.Screen name='ViewPrescription' component={ViewPrescription} options={{ title: 'Medico - Visualiar Prescrição', headerShown: false }} />
        <Stack.Screen name='ConsultationLocal' component={ConsultationLocal} options={{ title: 'Medico - Local da Consulta', headerShown: false }} />
        <Stack.Screen name='SelectDoctor' component={SelectDoctor} options={{ title: 'Selecionar Médico', headerShown: false }} />
        <Stack.Screen name='SelectClinic' component={SelectClinic} options={{ title: 'Selecionar Clínica', headerShown: false }} />
        <Stack.Screen name='InsertMedicalRecord' component={InsertMedicalRecord} options={{ title: 'Inserção Prontuário', headerShown: false }} />
        <Stack.Screen name="Main" component={Main} options={{ title: 'Main', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


