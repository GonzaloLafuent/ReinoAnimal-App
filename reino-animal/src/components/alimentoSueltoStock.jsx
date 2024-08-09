import React from 'react';
import { useState,useEffect } from 'react';
import {ScrollView, SafeAreaView, StyleSheet,Text, View,StatusBar, ActivityIndicator} from 'react-native';

export default AlimentoSueltoStock = () =>{
    const [stock,setStock] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null) 

    const retriveData = async () => {
        try{
            const response = await fetch("http://192.168.0.249:3000/alimentoSuelto",{method:"GET"})
            const data = await response.json()
            setStock(data)
        } catch(error){
            setError(error.message)
            console.log(error.message)
        } finally{
            setLoading(false)
        }
    }

    useEffect( ()=>{
        retriveData()
    },[])

    return(
        <SafeAreaView style={styles.container}>
            {loading? <ActivityIndicator size="large" color="#0000ff" />: 
            <ScrollView horizontal={true}>
                <ScrollView>
                    <Text style={styles.title}>Alimento Suelto</Text>
                    <View>
                        <View style={styles.header}>
                            <Text style={styles.headerTab}>Descripcion</Text>
                            <Text style={styles.headerTab}>Precio</Text>
                            <Text style={styles.headerTab}>U</Text>
                        </View>
                        <View>
                            {stock.map((product) => (
                                <View style = {styles.tab} id={product.id}>
                                    <View style={styles.cell} width={180}>
                                        <Text>{product.descripcion}</Text>
                                    </View>
                                    <View style={styles.cell} width={110}>
                                        <Text>{product.marca}</Text>
                                    </View>
                                    <View style={styles.cell} width={55}>
                                        <Text>{product.rubro}</Text>
                                    </View>
                                </View>
                                
                            ))}
                        </View>     
                    </View>
                </ScrollView>
            </ScrollView>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        justifyContent: "center",
        alignItems: "flex-start",
        marginBottom: 10
    },
    title:{
        marginTop: 15,
        fontWeight: "bold",
        fontSize: 20,
    },
    header:{
        backgroundColor: "black",
        height: 35,
        width: 346,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    headerTab: {
        color: "white",
        fontWeight: "bold",

    },
    tab: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    cell: {
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        height: 60,
        justifyContent: "center",
        alignItems: "center"
    }
})
