import React from 'react';
import { useState } from 'react';
import {ScrollView, SafeAreaView, StyleSheet,Text, View,StatusBar} from 'react-native';

export default StorePage = () =>{
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>STOCK:</Text>
                <View>
                    <View style={styles.header}>
                        <Text style={styles.headerTab}>Descripcion</Text>
                        <Text style={styles.headerTab}>Precio</Text>
                    </View>
                    <View style={styles.tab}>
                        <View style={styles.cell}>
                            <Text>DOG</Text>
                        </View>
                        <View style={styles.cell}>
                            <Text>125</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        justifyContent: "center",
        alignItems: "center"
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
