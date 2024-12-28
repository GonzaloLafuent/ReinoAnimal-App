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
import { useState , useEffect, createContext} from 'react';
import alimentoSueltoStock from './src/pages/alimentoSueltoStock';


const Tab = createBottomTabNavigator();

export default function App() {
  const [stockAlimentoSuelto,setAlimentoSuelto] = useState([])
  const [stockDogCenter,setDogCenter] = useState([])
  const [stockPiedras,setPiedras] = useState([])
  const [stockVitalCan,setVitalCan] = useState([])
  const [stockRoyalCanin,setRoyalCanin] = useState([])

  const dataContext = createContext()

  const retriveData = async () => {
    const routes = ["alimentoSuelto","dogCenter","piedras","vitalCan","royalCanin"]
    const setFunctions = [setAlimentoSuelto,setDogCenter,setPiedras,setVitalCan,setRoyalCanin]
    for (let index = 0; index < routes.length; index++) {
      try{   
          const response = await fetch("http://192.168.0.249:3000/" + routes[index],{method:"GET"})
          const data = await response.json()
          setFunctions[index](data)
      } catch(error){
          console.log(error.message)
      }  
    }
    setLoading(false) 
  }

  useEffect( ()=>{
    retriveData()
  },[])

  return (
    <NavigationContainer>
      <Tab.Navigator sceneContainerStyle={styles.container} screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({color}) => screenOptions(route, color),
        })} 
      >
        
        <Tab.Screen name="Ventas" component={SalesPage} options={{headerShown:false }}/>
        <Tab.Screen name="SUELTOS" component={AlimentoSueltoStock} options={{headerShown:false}}/>
        <Tab.Screen name="DOG CENTER" component={DogCenterStock}  options={{headerShown:false}}/>
        <Tab.Screen name="ROYAL" component={RoyalCaninStock} options={{headerShown:false }}/>
        <Tab.Screen name="VITALCAN" component={VitalCanStock} options={{headerShown:false}}/>
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
 
