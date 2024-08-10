import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SalesPage from './src/pages/salesPage';
import AlimentoSueltoStock from './src/pages/alimentoSueltoStock';
import DogCenterStock from './src/pages/dogCenterStock';
import RoyalCaninStock from './src/pages/royalCaninStock';
import VitalCanStock from './src/pages/vitalCanStock';
import PiedrasStock from './src/pages/piedrasStock';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator sceneContainerStyle={styles.container} screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({color}) => screenOptions(route, color),
        })} 
      >
        <Tab.Screen name="Ventas" component={SalesPage} options={{headerShown:false }}/>
        <Tab.Screen name="Alimento Suelto" component={AlimentoSueltoStock} options={{headerShown:false}}/>
        <Tab.Screen name="DOG CENTER" component={DogCenterStock} options={{headerShown:false}}/>
        <Tab.Screen name="ROYAL CANIN" component={RoyalCaninStock} options={{headerShown:false }}/>
        <Tab.Screen name="VITAL CAN" component={VitalCanStock} options={{headerShown:false}}/>
        <Tab.Screen name="PIEDRAS" component={PiedrasStock} options={{headerShown:false}}/>
      </Tab.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd433',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const screenOptions = (route, color) => {
  let iconName;
 
  switch (route.name) {
    case 'Ventas':
      iconName = 'cash';
      break;
    case 'Stock':
      iconName = 'store';
      break;
    case 'Añadir':
      iconName = 'upload';
      break;
    default:
      break;
  }
 
  return <MaterialCommunityIcons name={iconName} color={color} size={24} />;
 };
 
