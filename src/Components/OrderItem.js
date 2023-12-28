import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Feather} from '@expo/vector-icons'
import { colors } from '../Global/colors'



const OrderItem = ({order}) => {

    const total = order.items.reduce((acc,product) => acc + (product.price * product.quantity) ,0)

  return (

    <>
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.text1}>{new Date(order.createdAt).toLocaleString()} </Text>
            <Text style={styles.text2}>${total}</Text>
        </View>
        <Feather name='search' size={25} color='black'/>
    </View>
    
    
    </>
  )
}

export default OrderItem

const styles = StyleSheet.create({

    container:{
        backgroundColor:'grey',
        margin:10,
        padding:10,
        height: 120,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:10,
        borderWidth:2
    },
    textContainer:{
        width:'70%',
        gap:5
    },
    text1:{
        fontSize:19,
        color: 'black',
        fontWeight:'bold'

    },
    text2:{
        fontSize:17,
        color: colors.green1,
        fontWeight:'bold'

        
    }


})