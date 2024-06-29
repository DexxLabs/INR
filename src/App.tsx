import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'

import profile from './profile.jpeg'
import Card from './Card'

type ProfileHolder = PropsWithChildren<Image>   //this section is an Image Import Algorithm under development

const ProfileSeciton = ({}: Image) => {}


export default function App() {


  return (
    <>
    <SafeAreaView style={styles.background}>
    <StatusBar backgroundColor={'#000'}/>
     
    <View style={styles.headerContainer}>

      <View style = {styles.header}>
        <Image style={styles.profileImage} source = {{uri:'https://i.pinimg.com/564x/7f/94/f0/7f94f02bfa3f2ca3c1cb8fef7a94e8fb.jpg'}}/>
        <View style={styles.textBox}>

          <Text style={styles.nameinfo}>Ranbeer</Text>
          <Text style={styles.desc}>ranb__r</Text>
        </View>
      </View>
      <View>
      <Image style={styles.searchImage} source = {{uri:'https://img.icons8.com/ios/50/FFFFFF/search--v1.png'}}/>
     </View>
    </View>

  

    <Card/>
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  background:{
    backgroundColor: '#000',
    flex:1
  },
  
  headerContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 12,
    marginVertical: 20
  },
  header:{
    
    flexDirection: 'row',
    alignItems: 'center'
  },
  WelcomeText:{
    fontSize: 22,
    fontFamily: 'Inter-Bold',
    color: '#000',

  },
  profileImage:{
    height:50,
    width:50,
    borderRadius: 25
  },
  nameinfo:{
    color: '#fff',
    fontFamily: 'Inter-Light'
  },
  desc:{
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Inter-Light'
  },
  textBox:{
    marginHorizontal: 12
  },
  searchImage:{
    height:25,
    width:25
  }
})