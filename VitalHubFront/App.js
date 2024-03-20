import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import { UserProfile } from './src/screens/UserProfile/UserProfile';
import { PacientAppointments } from './src/screens/PacientAppointments/PacientAppointments';
import { Main } from './src/screens/Main/Main';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontsError] = useFonts({ MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_400Regular })

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Main" component={Main} options={{ title: 'Main', headerShown: false }} />
        <Stack.Screen name='PacientAppointments' component={PacientAppointments} options={{ title: 'Paciente - Consultas', headerShown: false }} />
        <Stack.Screen name='UserProfile' component={UserProfile} options={{ title: 'Perfil', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


