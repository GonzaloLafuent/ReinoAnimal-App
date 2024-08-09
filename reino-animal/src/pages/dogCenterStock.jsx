import React from "react"
import { useState,useEffect } from "react"
import { SafeAreaView,ScrollView, Text, View, ActivityIndicator } from "react-native"

export default DogCenterStock = () => {
    const [stock,setStock] = useState([])
    const [loading,setLoading] = useState(true)

    const retriveData = async () => {
        try{
            const response = await fetch("http://192.168.0.249:3000/dogCenter",{method:"GET"})
            const data = await response.json()
            setStock(data)
        } catch(error) {    
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=> {
        retriveData()
    },[])

    return (
        <SafeAreaView>
            {loading?<ActivityIndicator size="large" color="#0000ff" />:
                <ScrollView horizontal={true}>
                    <ScrollView>

                    </ScrollView>
                </ScrollView>
            }
        </SafeAreaView>
    )
}