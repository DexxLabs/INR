import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import INRCard from './assets/INRCard'
import ConverterCard from './assets/ConverterCard'

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.background}>
    <StatusBar backgroundColor={'#fff'}/>
    <View style={styles.headerContainer}>
      <Text style={styles.headertext}>INR</Text>
    </View>
    
    <INRCard/>
    <ConverterCard/>
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  background:{
    backgroundColor: '#fff',
    flex:1
  },
  headertext:{
    color:'#000',
    fontFamily: 'Inter-SemiBold',
    fontSize: 15
  },

  headerContainer:{
    alignItems: 'center',
    paddingTop: 10
  }
})