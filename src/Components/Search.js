import { StyleSheet, Text, View, TextInput,Pressable} from 'react-native'
import React, { useState } from 'react'
import {colors} from '../Global/colors'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Categories from './Categories';




const Search = ({setKeyword}) => {

    const [input, setInput] = useState('')
    const [error, setError] = useState('')
    


    const seach = () =>{
    const expression = /.*[0-9].*/;

        if(expression.test(input)){

            setError('no debe contener numeros');

        }else{
            setKeyword(input)
        }
    }

    const removeItem = () => {
        setInput('')
        setError('')
    }


    
     
  return (
    <>
    
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Buscar producto' value={input} onChangeText={setInput} />
            <Pressable onPress={seach}>
                <FontAwesome5 name="search" size={24} color="black" />
            </Pressable>
            <Pressable onPress={removeItem}>
                <FontAwesome name="close" size={24} color="black" />
            </Pressable>
        </View>
        {error ? <Text>{error}</Text> : null}
    

    </>
  )
}

export default Search

const styles = StyleSheet.create({

    container:{
        backgroundColor: colors.green1,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        gap:10,

    },
    input:{
      backgroundColor: colors.green2,
      width:'65%',
      borderWidth:2,
      borderRadius:5,
      paddingHorizontal:10,
      paddingVertical:5,
      margin:10,

    }
})