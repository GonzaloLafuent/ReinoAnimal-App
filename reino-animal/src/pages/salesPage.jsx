import React from 'react';
import { useState } from 'react';
import {ScrollView,Pressable, SafeAreaView, StyleSheet, TextInput,Text, View,Image, Alert} from 'react-native';

export default SalesPage = () => {
    const [products,setProducts] = useState([])
    const [inputProduct,setInputProduct] = useState("")
    const [inputUnidad,setInputUnidad] = useState(1)

    const cobrar = () => {
        const sum = products.reduce((acc,product)=>
          acc += product.price,0
        )
        setProducts([])
        Alert.alert('Compra con exito','El total es ' + sum,  
          [  
              {  
                  text: 'Cancel',  
                  onPress: () => console.log('Cancel Pressed'),  
                  style: 'cancel',  
              },  
              {text: 'OK', onPress: () => console.log('OK Pressed')},  
          ]  
        )  
    }

    const search = () => {
      if(inputProduct != ""){
        products.push({name:inputProduct,price:(125*inputUnidad)})
        setInputProduct("")
        setInputUnidad(1)
      } else {
        Alert.alert('Error','Ingrese el nombre de un producto',  
        [  
            {  
                text: 'Cancel',    
                style: 'cancel',  
            },  
            {text: 'OK'},  
        ]  
      )
      }
    }

    return (
        <ScrollView style={styles.page}>
          <SafeAreaView style={styles.form}>
            <Image style={styles.image} source={require("../../assets/icon.png")}/>
            <View flexDirection={"row"}>
              <TextInput
                style={styles.input}
                placeholder="Producto"
                value={inputProduct}
                onChangeText= {(text) => setInputProduct(text)}
              />
              <TextInput placeholder="Unidad" style={styles.input} width={65}
                 onChangeText= {(unidad) => setInputUnidad(unidad)}
                 value={inputUnidad}
              >
              </TextInput>
            </View>
            <View style = {styles.buttonPanel}>
                <Pressable style = {styles.button} onPress={()=>{search()}}>
                    <Text>Agregar</Text>
                </Pressable>
                <Pressable style = {styles.button} onPress={()=>{setProducts([...products,{name:"DOG",price: 1255}])}}>
                    <Text>Abrir QR</Text>
                </Pressable>
            </View>
          </SafeAreaView>  
          {products.length!=0?
            <View style={styles.tab}>
              <View>
                <Text style={styles.tabTitle} >Producto:</Text>
                <View style={styles.salesPanel}>
                  {products.map((p) => (
                    <Text>{p.name}</Text>
                  ))}
                </View>
              </View>
              <View>
                <Text style={styles.tabTitle}>Precio:</Text>
                <View style={styles.salesPanel}>
                  {products.map((p) => (
                    <Text>{p.price}</Text>
                  ))}
                </View>
              </View>
            </View>
          :<></>}
          {products.length!=0?
            <View style = {styles.buttonPanel}>
              <Pressable style={styles.button} onPress={cobrar}>
                <Text>Cobrar</Text>
            </Pressable>
              <Pressable style = {styles.button} onPress={()=>setProducts([])}>
                  <Text>Borrar</Text>
              </Pressable>
            </View>
          :<></>}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
  form: {
    marginTop:60,
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 285,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 2,
    backgroundColor: "white",
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    margin: 6,
  },
  buttonPanel: {
    flexDirection: "row",
  },
  salesPanel:{
    marginBottom: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingRight: 58,
    paddingLeft: 58,
    borderWidth: 1,
    borderRadius: 10,
  },
  tab:{
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 30,
  },
  tabTitle: { 
    fontWeight: "bold",
  },
  image:{
    height: 180,
    width: 180,
  }
});
