
import Header from '../Components/Header'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from '../Screens/Cart'
import { StyleSheet } from 'react-native'


const Stack = createNativeStackNavigator()

const CartStack = () => {
  return (
    
    <Stack.Navigator  
            initialRouteName='Cart'
            screenOptions={
                ({route}) => {
                    return {
                        header : () => <Header title='Carrito'/>
                    }
                }
            }
        
        >
            <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>



  )
}

export default CartStack

const styles = StyleSheet.create({})