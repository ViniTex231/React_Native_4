import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import styles from './styles'

export default function Tela1({navigation, route}){

    const {tt} = route.params
    var soma = tt * 2

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Tela 1</Text>
            </View>
            <View>
                <Text style={{fontSize: 25}}>
                    {tt}
                </Text>
                <TouchableOpacity style={styles.btnOk} onPress={()=>navigation.navigate('Tela2', {mult:soma})}>
                    <Text style={{fontSize:25}}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}