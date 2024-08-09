import React from 'react';
import { useState,useEffect } from 'react';
import {ScrollView, SafeAreaView, StyleSheet,Text, View,StatusBar} from 'react-native';

export default AlimentoSueltoStock = () =>{
    const [stock,setStock] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect( ()=>{
        const retriveData = async () => {
            try{
                const response = await fetch("http://192.168.0.249:3000/alimentoSuelto",{method:"GET"})
                const data = await response.json()
                setStock(data)
                console.log(data)
            } catch(error){
                console.log(error.message)
            }
        }
        retriveData()
        console.log(stock)
    },[])

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>STOCK:</Text>
                <View>
                    <View style={styles.header}>
                        <Text style={styles.headerTab}>Descripcion</Text>
                        <Text style={styles.headerTab}>Precio</Text>
                        <Text style={styles.headerTab}>U</Text>
                    </View>
                    {stock.map((product) => {
                        <View style={styles.tab} id={product.id}>
                            <View style={styles.cell}>
                                <Text>{product.descripcion}</Text>
                            </View>
                            <View style={styles.cell} width={128}>
                                <Text>{product.marca}</Text>
                            </View>
                            <View style={styles.cell} width={45}>
                                <Text>{product.rubro}</Text>
                            </View>
                        </View>
                    })} 
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        justifyContent: "center",
        alignItems: "flex-start"
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
        width: 173,
    }
})
