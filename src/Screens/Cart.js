import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import allCart from '../Data/cart.json'
import CartItem from '../Components/CartItem'
import { useSelector } from 'react-redux'
import { usePostOrdersMutation } from '../app/services/shopServices'


const Cart = () => {

  const cart = useSelector(state => state.cart.value)
  const [triggerPostOrder] = usePostOrdersMutation()
    // se utiliza para que cuando se renderice la pagina se actualiza el carrito. por el momento no se usa porq esta hardcodeado
    

  return (
    <>
        <View style={styles.container}>
            <FlatList 
                data={cart.items}
                keyExtractor={item => item.id}
                renderItem={({item}) => <CartItem item={item}/>}
            />
            <View style={styles.confirmContainer}>
                <Pressable onPress={() => triggerPostOrder(cart)}>
                    <Text style={styles.text}>Confirmar</Text>
                </Pressable>
                <Text style={styles.text}>Total: ${cart.total} </Text>
            </View>
        </View>
    
    
    
    </>
  )
}

export default Cart

const styles = StyleSheet.create({

    container:{
        flex:1,
        marginBottom:130
    },
    confirmContainer:{
        backgroundColor: 'grey',
        padding:25,
        flexDirection:'row',
        justifyContent:'space-between'

    },
    text:{
        color:'white'
    }


})