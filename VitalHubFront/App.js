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
import { SelectDate } from './src/screens/SelectDate/SelectDate';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontsError] = useFonts({ MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_400Regular })

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='PasswordRecover' component={PasswordRecover} options={{ headerShown: false }} />
        <Stack.Screen name='PasswordReset' component={PasswordReset} options={{ headerShown: false }} />
        <Stack.Screen name='CreateAccount' component={CreateAccount} options={{ headerShown: false }} />
        <Stack.Screen name='EmailVerification' component={EmailVerification} options={{ headerShown: false }} />
        <Stack.Screen name='UserProfile' component={UserProfile} options={{ headerShown: false }} />
        <Stack.Screen name='ConfirmMedicalRecord' component={ConfirmMedicalRecord} options={{ headerShown: false }} />
        <Stack.Screen name='Appointments' component={Appointments} options={{ headerShown: false }} />
        <Stack.Screen name='ViewPrescription' component={ViewPrescription} options={{ headerShown: false }} />
        <Stack.Screen name='ConsultationLocal' component={ConsultationLocal} options={{ headerShown: false }} />
        <Stack.Screen name='SelectDoctor' component={SelectDoctor} options={{ headerShown: false }} />
        <Stack.Screen name='SelectClinic' component={SelectClinic} options={{ headerShown: false }} />
        <Stack.Screen name='InsertMedicalRecord' component={InsertMedicalRecord} options={{ headerShown: false }} />
        <Stack.Screen name='SelectDate' component={SelectDate} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


