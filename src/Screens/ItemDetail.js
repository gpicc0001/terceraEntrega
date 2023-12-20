import { StyleSheet, Text, View, Image, Pressable, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import allProduct from '../Data/products.json'
import{colors} from '../Global/colors'

const ItemDetail = ({productDetailId, setProductDetailId}) => {

  const [product, setProduct] = useState({})

  useEffect(() => {
    const productFinded = allProduct.find(product => product.id === productDetailId)
    setProduct(productFinded)

  },[productDetailId])

  return (
    <>
      <View style={styles.container}>
        <Header title='Product'/>
        <Button title='Go Back' onPress={() => setProductDetailId(0)}/>
        <Image 
        style={styles.image}
        source={{uri:product.thumbnail}}
        resizeMode='cover'
        
        />
        <View style={styles.containerText}>
          <Text style={styles.title} >{product.title}</Text>
          <Text>{product.description}</Text>
        </View>
        <View style={styles.containerBuyNow}>  
          <Text style={styles.price}>${product.price}</Text>
          <Pressable style={styles.buyNow}>
            <Text style={styles.buyNowText}>Buy Now</Text>
          </Pressable>
        </View>
      </View>
    
    
    
    
    </>
  )
}

export default ItemDetail

const styles = StyleSheet.create({

    container:{
        width:'100%',
        flex:1,
        justifyContent:'start',
        alignItems:'center'
    },
    image:{
      width:'100%',
      height:200
    },
    containerText:{
      gap:15,
      paddingHorizontal:5,
      paddingVertical:15
    },
    title:{
      fontSize:20,
      fontWeight:'bold',
    },
    containerBuyNow:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      marginVertical:10
    },
    price:{
      fontWeight:'bold',
      fontSize:20,
      paddingHorizontal:20
    },
    buyNow:{
      backgroundColor:colors.green2,
      paddingVertical:5,
      paddingHorizontal: 10,
      borderRadius:5

    },
    buyNowText:{

    }

})