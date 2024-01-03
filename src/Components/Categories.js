import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import CategoryItem from './CategoryItem'
import { useSelector, useDispatch } from 'react-redux'



const Categories = ({navigation,route}) => {

  const categories = useSelector((state) => state.shop.value.categories)


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