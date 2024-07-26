import React from 'react';
import { useState } from 'react';
import {Pressable, SafeAreaView, StyleSheet, TextInput,Text, View} from 'react-native';

export default SalesPage = () => {
    const [count,setCount] = useState(0)
    const [products,setProducts] = useState([])
    return (
        <SafeAreaView>
        <TextInput
            style={styles.input}
            placeholder="Producto"
        />
        <View style = {styles.buttonPanel}>
            <Pressable style = {styles.button} onPress={()=>{setCount(count+1)}}>
                <Text>Buscar</Text>
            </Pressable>
            <Pressable style = {styles.button} onPress={()=>{setProducts([...products,"manzana"])}}>
                <Text>Abrir QR</Text>
            </Pressable>
        </View>
        <View>
            <Text>{products.length==0? "nada": products[1] }</Text>
            <Text>{count}</Text>
        </View>
        
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 328,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
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
  },
  buttonPanel: {
    flexDirection: "row",
    justifyContent: "space-around",
  }
});
