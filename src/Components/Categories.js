import { FlatList, StyleSheet} from 'react-native'
import React from 'react'

import CategoryItem from './CategoryItem'
import { useGetCategoriesQuery } from '../app/services/shopServices'




const Categories = ({navigation,route}) => {

  const {data: categories} = useGetCategoriesQuery() //me trae un objeto con toda la data del servidor.
 

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