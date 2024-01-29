import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import  Home  from './src/Screens/Home';
import ItemListCategories from './src/Screens/ItemListCategories';
import ItemDetail from './src/Screens/ItemDetail';
import { useEffect, useState } from 'react';
import {colors} from './src/Global/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font';
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import MainNavigator from './src/navigation/MainNavigator';

const App = () => {

  const [fontLoaded] = useFonts({Josefin: require('./assets/fonts/JosefinSans-Bold.ttf')})
  

  if (!fontLoaded) return null

  return (
    <>
        <StatusBar backgroundColor={colors.green1} style="auto" />
        <Provider store={store}>
          <MainNavigator />   
        </Provider>
        


    </>

  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});










 // const [categorySelected, setCategorySelected] = useState('')
// const [productDetailId, setProductDetailId] = useState(0)


  // useEffect(() => {
  //   console.log(productDetailId);


  // },[productDetailId])


{/* <SafeAreaView style={styles.container}>
          {categorySelected ? 
            productDetailId != 0 ?
                <ItemDetail productDetailId={productDetailId} setProductDetailId={setProductDetailId}/>
              :
                <ItemListCategories category = {categorySelected} 
                setCategorySelected={setCategorySelected} 
                setProductDetailId ={setProductDetailId}
                /> 
          : 
              
          <Home setCategorySelected = {setCategorySelected}/>
            
          }
          
          
        </SafeAreaView> */}