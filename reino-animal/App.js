import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SalesPage from './src/components/salesPage';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SalesPage />      
    </View>
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
