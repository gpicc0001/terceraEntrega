import { StyleSheet, Text, View,Image, useWindowDimensions, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import {colors} from '../Global/colors'

const ProductItem = ({item, setProductDetailId}) => {
    const{width, height} = useWindowDimensions()

    useEffect(() => {
        console.log(width);


    },[width])

  return (
    <>
        <Pressable style={styles.container} onPress={() => setProductDetailId(item.id)}>
            <Image 
                style={styles.image}
                resizeMode='cover'
                source={{uri:item.thumbnail}}
            />
            <Text style={styles.text}>{item.title}</Text>
        </Pressable>
    
    
    </>
  )
}

export default ProductItem

const styles = StyleSheet.create({

    container:{
        width:'80%',
        backgroundColor: colors.green2,
        marginHorizontal:'10%',
        marginVertical:10,
        paddingHorizontal:10,
        paddingVertical:15,
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'star',
        gap:30,

    },
    text:{

    },
    image:{
        width:50,
        height:50
    }

})