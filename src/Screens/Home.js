import { StyleSheet, Text, View } from 'react-native'
import  Header  from '../Components/Header'
import Categories from '../Components/Categories'
import Counter from '../Components/Counter'


const Home = ({navigation, route}) => {
  return (
    <>
        <Header />
        <Counter />
        <Categories style={styles.container} navigation={navigation} route={route}/>
    
    
    </>
  )
}

export default Home

const styles = StyleSheet.create({


  container:{
    
  }

})