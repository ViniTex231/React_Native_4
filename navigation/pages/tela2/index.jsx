import React, {useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './styles'

export default function Tela2({navigation, route}){

    const {mult} = route.params


    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Tela 2</Text>
            </View>
            <View>
                <Text style={{fontSize: 25}}>
                    {mult}
                </Text>
                <TouchableOpacity style={styles.btnOk} onPress={()=>navigation.navigate('Login')}>
                    <Text style={{fontSize:25}}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}