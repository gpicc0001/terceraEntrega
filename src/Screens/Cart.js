import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import allCart from '../Data/cart.json'
import CartItem from '../Components/CartItem'


const Cart = () => {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setCart(allCart)

    },[])

    useEffect(()=>{
        const total = cart.reduce((acc,product) => acc + (product.price * product.quantity),0)
        console.log(total);
        setTotal(total)
        


    },[cart]) 
    
    // se utiliza para que cuando se renderice la pagina se actualiza el carrito. por el momento no se usa porq esta hardcodeado
    

  return (
    <>
        <View style={styles.container}>
            <FlatList 
                data={cart}
                keyExtractor={item => item.id}
                renderItem={({item}) => <CartItem item={item}/>}
            />
            <View style={styles.confirmContainer}>
                <Pressable>
                    <Text style={styles.text}>Confirmar</Text>
                </Pressable>
                <Text style={styles.text}>Total: ${total} </Text>
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