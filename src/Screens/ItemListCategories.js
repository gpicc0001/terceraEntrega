import { FlatList, StyleSheet } from 'react-native'
import Search from '../Components/Search';
import ProductItem from '../Components/ProductItem';
import { useEffect, useState } from 'react';
import { useGetProductsQuery } from '../app/services/shopServices';


const ItemListCategories = ({navigation, route}) => {
  const {category} = route.params //puedo tomar la navegacion de CategoryItem.
  const {data, isLoading, error} = useGetProductsQuery(category)
  const [keyword, setKeyword] = useState('')
  const [products, setProducts] = useState()

  

  useEffect(() => {

      if(!isLoading){
        const dataArray = Object.values(data)
        const productsFiltered = dataArray.filter(product => product.title.includes(keyword)) //filtro del buscador
        setProducts(productsFiltered)
      } 

  },[keyword,data])
  //useEffect, es una funcion q recibe dos parametros, una funcion anonima y el segundo un estado q cada vez q sufra una modificacion va a ejecutar la funcion anonima. lo q esta adentro solo se va a ejecutar cuando carga la pagina

  return (
    <>
     
      <Search keyword ={keyword} setKeyword ={setKeyword}/>
      <FlatList 
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ProductItem item={item} navigation={navigation} route = {route} />}
      
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