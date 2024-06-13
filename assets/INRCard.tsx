import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function INRCard() {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.headertext}>Welcome to Converter</Text>
    <View style={styles.card}>
        <Text style={styles.instructions}>Indian Rupees</Text>
        <TextInput style={styles.inputfield} keyboardType='numeric'/>
        <Text style={styles.instructions}>Converted Value: </Text>

    </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal: 15
    },
    headertext:{
        color: '#000',
        marginTop: 20,
        fontFamily: 'Inter-Bold',
        fontSize: 21,
        marginBottom: 10
    },
    card:{
        backgroundColor: '#000',
        flex:1,
        marginVertical: 10,
        borderRadius: 20
    },
    instructions:{
        margin:15,
        color : '#fff',
        fontFamily: 'Inter-Regular',
        fontSize: 13,
        textAlign: 'center'
    },
    inputfield:{
        borderColor: '#fff',
        borderWidth: 2,
        marginHorizontal: 15,
        borderRadius: 20
    }
})