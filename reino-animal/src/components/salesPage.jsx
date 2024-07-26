import React from 'react';
import { useState } from 'react';
import {ScrollView,Pressable, SafeAreaView, StyleSheet, TextInput,Text, View} from 'react-native';

export default SalesPage = () => {
    const [count,setCount] = useState(0)
    const [products,setProducts] = useState([])
    return (
        <ScrollView style={styles.page}>
          <SafeAreaView style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Producto"
            />
            <View style = {styles.buttonPanel}>
                <Pressable style = {styles.button} onPress={()=>{setProducts([])}}>
                    <Text>Buscar</Text>
                </Pressable>
                <Pressable style = {styles.button} onPress={()=>{setProducts([...products,"manzana"])}}>
                    <Text>Abrir QR</Text>
                </Pressable>
            </View>
          </SafeAreaView>  
          <ScrollView>
            {products.map((p) => (
              <Text>{p}</Text>
            ))}
          </ScrollView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
  form: {
    marginTop:150,
  },
  input: {
    height: 40,
    width: 328,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 52,
    paddingLeft: 52,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  buttonPanel: {
    flexDirection: "row",
    justifyContent: "space-around",
  }
});
