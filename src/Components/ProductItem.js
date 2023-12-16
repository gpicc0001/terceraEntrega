import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import {colors} from '../Global/colors'

const ProductItem = ({item}) => {
  return (
    <>
        <View style={styles.container}>
            <Image 
                style={styles.image}
                resizeMode='cover'
                source={{uri:item.thumbnail}}
            />
            <Text style={styles.text}>{item.title}</Text>
        </View>
    
    
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