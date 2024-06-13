import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ConverterCard() {
  return (
    <>
    <View style={styles.container}>
    <View style={styles.card}>
        <View style= {styles.leftside}>


        </View>
        <View style={styles.rightside}>

        <View style = {styles.minibox}>
            <View style={styles.imagecontainer}></View>
            <View style={styles.textcontainer}>
                <Text style={styles.buttontext}>USA</Text>
            </View>
            
        </View>
        <View style = {styles.minibox}>
        <View style={styles.imagecontainer}></View>
            <View style={styles.textcontainer}>
                <Text style={styles.buttontext}>USA</Text>
            </View>
        </View>
        
        <View style = {styles.minibox}>
        <View style={styles.imagecontainer}></View>
            <View style={styles.textcontainer}>
                <Text style={styles.buttontext}>USA</Text>
            </View>
        </View>
        <View style = {styles.minibox}>
        <View style={styles.imagecontainer}></View>
            <View style={styles.textcontainer}>
                <Text style={styles.buttontext}>USA</Text>
            </View>
        </View>
        
        <View style = {styles.minibox}>
        <View style={styles.imagecontainer}></View>
            <View style={styles.textcontainer}>
                <Text style={styles.buttontext}>USA</Text>
            </View>
        </View>
        <View style = {styles.minibox}>
        <View style={styles.imagecontainer}></View>
            <View style={styles.textcontainer}>
                <Text style={styles.buttontext}>USA</Text>
            </View>
        </View>
        </View>
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
        
        fontFamily: 'Inter-Bold',
        fontSize: 15,
        
    },
    card:{
        backgroundColor: '#000',
        flex:1,
        marginVertical: 10,
        borderRadius: 20,
        flexDirection: 'row',
       
    },
    minibox: {
        backgroundColor: '#fff',
        flex:1,
        borderRadius: 10,
        margin: 5,
        flexDirection: 'row'
        
    },
    
    leftside: {
        margin:15,
        flex:1,
    },
    rightside:{
        flex:1,
        margin:15
    },
    buttontext:{
        color: '#000',
        fontFamily: 'Inter-SemiBold'
    },
    textcontainer:{
        flex:2,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    imagecontainer:{
        flex:1,
        backgroundColor: '#55efc4',                 //To be replaced by country flag
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
})