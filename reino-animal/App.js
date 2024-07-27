import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SalesPage from './src/components/salesPage';
import StorePage from './src/components/storePage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator sceneContainerStyle={styles.container} screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })} >
        <Tab.Screen name="Ventas" component={SalesPage} options={{headerShown:false}}/>
        <Tab.Screen name="Stock" component={StorePage} options={{headerShown:false}}/>
        <Tab.Screen name="Añadir" component={StorePage} options={{headerShown:false}}/>
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
  tab: {
    activeBackgroundColor: "#ff9933",
  }
});
