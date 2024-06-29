import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

type CurrencyProp = PropsWithChildren<{
    name: string;
    flag: string;
}>

const Currency = (props: CurrencyProp) => {
    return(
        <View style = {styles.minibox}>
            <View style={styles.imagecontainer}>{props.flag}</View>
            <View style={styles.textcontainer}>
                <Text style={styles.buttontext}>{props.name}</Text>
            </View>
            
        </View>
    )
}

export default function CurrencyButton() {
  return (
    <>
    <Currency name={item.name} flag={}/>
    </>
  )
}

const styles = StyleSheet.create({

    minibox: {
        backgroundColor: '#fff',
        flex:1,
        borderRadius: 10,
        margin: 5,
        flexDirection: 'row'
        
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