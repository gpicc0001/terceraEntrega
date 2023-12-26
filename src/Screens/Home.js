import { StyleSheet, Text, View } from 'react-native'
import  Header  from '../Components/Header'
import Categories from '../Components/Categories'


const Home = ({navigation, route}) => {
  return (
    <>
        <Header />
        <Categories style={styles.container} navigation={navigation} route={route}/>
    
    
    </>
  )
}

export default Home

const styles = StyleSheet.create({


  container:{
    
  }

})