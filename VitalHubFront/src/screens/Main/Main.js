import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Appointments } from '../Appointments/Appointments'
import { UserProfile } from '../UserProfile/UserProfile'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { ContentIcon, TextIcon } from './Style'

const BottomTab = createBottomTabNavigator()

export const Main = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Appointments"

      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "#FFFFFF", height: 80 },
        tabBarActiveBackgroundColor: "transparent",
        tabBarShowLabel: false,
        headerShown: false,

        tabBarIcon: ({ focused }) => {

          if (route.name === "Appointments") {
            return (
              <ContentIcon
                tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}

              >
                <FontAwesome name='calendar' size={22} color="#607EC5" />
                {focused && <TextIcon>Agenda</TextIcon>}
              </ContentIcon>
            )
          } else {
            return (
              <ContentIcon
                tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
              >
                <FontAwesome5 name='user-circle' size={22} color="#607EC5" />
                {focused && <TextIcon>Perfil</TextIcon>}
              </ContentIcon>
            )
          }
        }
      })}
    >
      <BottomTab.Screen
        name="Appointments"
        component={Appointments}
      />
      <BottomTab.Screen
        name="UserProfile"
        component={UserProfile}
      />
    </BottomTab.Navigator>
  )
}