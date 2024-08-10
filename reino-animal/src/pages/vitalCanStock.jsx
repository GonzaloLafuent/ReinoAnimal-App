import React from 'react';
import { useState,useEffect } from 'react';
import {ScrollView, SafeAreaView, StyleSheet,Text, View,StatusBar, ActivityIndicator} from 'react-native';
import RowTab from '../components/rowTab';

export default VitalCanStock = () => {
    const [stock,setSotck] = useState([])
    
    const normalizeJson = (jsonObject) => {
        delete jsonObject["_id"]
        delete jsonObject["__v"]
        return Object.values(jsonObject)
    } 

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Vital Can</Text>
                <ScrollView horizontal={true} >
                    <View>
                        <RowTab height={35} width={165} backgroundColor={"black"} content={["Codigo","Descripcion","Costo","CostoFinal","Venta"]} text_color={"white"} text_weight={"bold"}></RowTab> 
                        <ScrollView>
                            {stock.map((product) => (
                                <RowTab id={product._id} height={60} width={165} backgroundColor={"white"} content={normalizeJson(product)} text_color={"black"} text_weight={"bold"}></RowTab>                       
                            ))}     
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
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
        margin: 10
    },    
})