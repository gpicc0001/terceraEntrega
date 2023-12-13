import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import categories from '../Data/categories.json'


const Categories = () => {
  return (
    <FlatList 
        data={categories} //de donde saco la informacion. 
        keyExtractor={item => item} //recorro el arreglo con el item directamente porque son unicos.
        renderItem={({item}) => <View><Text>{item}</Text></View>}

    
    />
  )
}

export default Categories

const styles = StyleSheet.create({})