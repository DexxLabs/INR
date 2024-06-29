import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
//components
import CurrencyButton from './CurrencyButton'
//import Snackbar from 'react-native-snackbar';
//constant
import { currencyByRupee } from './constants'


export default function Card() {

const[inputValue,setinputValue] = useState('')  //INR Value
const[output,setOutput] = useState('')
const[cardVisible,setVisibility] = useState(false)

const Submit = (targetValue : Currency) => {
    if (!inputValue) {
        /*return Snackbar.show({
            text: 'No Value Entered',
            backgroundColor: '#000',
            textColor: '#fff'
          });*/
        }

        const inputAmount = parseFloat(inputValue) 
    if (!isNaN(inputAmount)) {
        const convertedValue = (inputAmount*targetValue.value)
        const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
        setOutput(result)
        
        }else{
          //snackbar
        }
};


  return (
    <>
    <View style= {styles.cardContainer}>
        <View style={styles.headerBox}>

      <Text style={styles.headertext}>Welcome To Converter</Text>
        </View>
        <TextInput maxLength= {8} value={inputValue} onChangeText={setinputValue} cursorColor={"#000"} keyboardType='decimal-pad' placeholder='Enter Amount in Rupees' placeholderTextColor={"#000"} style={styles.inputField}></TextInput>

      <View style={styles.buttonsContainer}>
      <FlatList 
       numColumns={3}
       data={currencyByRupee}
       keyExtractor={item => item.name}
       renderItem={({item})=>(

        <Pressable  onPress={()=>{
          Submit(item)
          setVisibility(true)
        }}>
            <CurrencyButton {...item}/>
        </Pressable>
       )
      }
      />
      </View>
      {cardVisible?
      <View style={styles.resultCard}>
         <Text style={styles.resultText}>₹{inputValue} = {output}</Text>
     </View>: <View style={styles.resultCard}>
            <Text style={styles.resultText}>₹1 = $0.12</Text>
     </View>
}
      
    
    </View>

    </>
  )
}

const styles = StyleSheet.create({
    cardContainer:{
        flex: 1,
        flexGrow: 1,
        backgroundColor: '#fff',
       borderTopLeftRadius: 30,
       borderTopRightRadius: 30,
       marginHorizontal:4
    },
    headertext:{
        color:'#000',
        fontFamily: 'Inter-Bold',
        fontSize: 23
      },
      headerBox:{
        margin: 12
      },
      inputField:{
        borderWidth: 2,
        borderColor: '#000',
        margin: 12,
        borderRadius: 15,
        color: '#000',
        padding:12
      },
      desciptionText:{
        color: '#000',
        marginHorizontal: 12,
        marginTop: 16
      },
      buttonSubmit:{
            color: '#fff',
            fontFamily: 'Inter-Bold',
            fontSize: 16,
            backgroundColor: '#000',
            padding: 15,
            marginHorizontal:12,
            borderRadius: 15,
            textAlign: 'center',
            marginBottom: 30
      },
      resultCard:{
        backgroundColor: '#000',
        margin:12,
        borderRadius: 15,
        paddingVertical: 20,
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        elevation:3

      },
      resultText: {
        color: '#fff',
        fontFamily: 'Inter-ExtraBold',
        fontSize: 23
      },
      buttonsContainer:{
        alignItems: 'center',
        justifyContent: 'center'
      },
      descText:{
        color: '#fff',
        fontFamily: 'Inter-Regular',
        fontSize: 23
      
      },
      resultCardBefore:{
        backgroundColor: '#000',
        margin:12,
        borderRadius: 15,
        paddingVertical: 20,
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        elevation:3,
        

      }
})