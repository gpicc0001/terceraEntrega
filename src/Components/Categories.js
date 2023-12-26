import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import categories from '../Data/categories.json'
import CategoryItem from './CategoryItem'


const Categories = ({navigation,route}) => {
  return (
    <FlatList 
        style={styles.container}
        data={categories} //de donde saco la informacion. 
        keyExtractor={item => item} //recorro el arreglo con el item directamente porque son unicos.
        renderItem={({item}) => <CategoryItem category ={item} navigation={navigation} route={route} />}    
    />
  )
}

export default Categories

const styles = StyleSheet.create({

  container:{
    width:'100%',
    
  }

})