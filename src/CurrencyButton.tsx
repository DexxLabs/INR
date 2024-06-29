import React from 'react'
import type { PropsWithChildren } from 'react'

import { View, Text, StyleSheet, Dimensions} from 'react-native'

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

const deviceWidth = (Dimensions.get('window').width);

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
    return(
        <View style={styles.buttonContainer}>
            
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer : {
        alignItems: 'center',
        backgroundColor: "#000",
        borderRadius: 15,
        flexDirection: 'row',
        width: deviceWidth/3.5 ,
        height:50,
        justifyContent: 'center',
        marginBottom:10,
        marginHorizontal: 5,
        elevation:3
    },
    flag: {
        fontSize: 25,
        color: "#FFFFFF",
        marginBottom: 4,

    },
    country: {
        fontSize: 10,
        color: "#fff",
        fontFamily: 'Inter-Regular'

    
    }
})

export default CurrencyButton