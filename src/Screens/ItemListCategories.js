import { Button, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Header from '../Components/Header'
import Search from '../Components/Search';
import allProducts from '../Data/products.json'
import ProductItem from '../Components/ProductItem';
import { useEffect, useState } from 'react';


const ItemListCategories = ({category,setCategorySelected, setProductDetailId}) => {

  const [keyword, setKeyword] = useState('')
  const [products, setProducts] = useState(allProducts)

  useEffect(() => {

    if(category){
      const productsCategory = allProducts.filter(product => product.category === category)
      const productsFiltered = productsCategory.filter(product => product.title.includes(keyword))
      setProducts(productsFiltered)
    }else{
      const productsFiltered = allProducts.filter(product => product.title.includes(keyword))
      setProducts(productsFiltered)

    }


  },[keyword])
  //useEffect, es una funcion q recibe dos parametros, una funcion anonima y el segundo un estado q cada vez q sufra una modificacion va a ejecutar la funcion anonima. lo q esta adentro solo se va a ejecutar cuando carga la pagina

  return (
    <>
      <Header />
      <Search keyword ={keyword} setKeyword ={setKeyword}/>
      <Button title='Go Back' onPress={() => setCategorySelected('')}/>
      <FlatList 
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ProductItem item={item} setProductDetailId={setProductDetailId}/>}
      
      />
    
    
    </>
  )
}

//FLatList se usa para mostar y recorrer elementos

export default ItemListCategories

const styles = StyleSheet.create({
    
  container:{
    width:'100%'
  }

})