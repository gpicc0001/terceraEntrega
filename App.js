import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Home  from './src/Screens/Home';
import ItemListCategories from './src/Screens/ItemListCategories';
import ItemDetail from './src/Screens/ItemDetail';
import { useState } from 'react';


const App = () => {

  const [categorySelected, setCategorySelected] = useState('')

  return (
    <View style={styles.container}>
      {categorySelected ? <ItemListCategories category = {categorySelected} /> : <Home setCategorySelected = {setCategorySelected}/>}
      
      {/* <ItemDetail /> */}
      
      <StatusBar style="auto" />
    </View>
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
