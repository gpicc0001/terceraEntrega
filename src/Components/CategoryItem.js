import { Pressable, StyleSheet, Text, View } from 'react-native'
import {colors} from '../Global/colors'
import CardShadow from '../Wrappers/CardShadow'




const CategoryItem = ({category, setCategorySelected}) => {


  
  return (
    <> 
    
    <Pressable onPress={() => setCategorySelected(category)}>
      <CardShadow style={styles.container}>
          <Text style={styles.Text}>{category}</Text>
      </CardShadow>
    </Pressable>
    
    
    
    </>
  )
}
//se crea el componente CArdShadow para envolver todas las cards
export default CategoryItem

const styles = StyleSheet.create({

    container:{
        backgroundColor: colors.green2,
        width:'80%',
        marginHorizontal: '10%',
        margin: 10,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
    }
})