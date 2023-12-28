
import Header from '../Components/Header'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Orders from '../Screens/Orders'
import { StyleSheet } from 'react-native'


const Stack = createNativeStackNavigator()

const OrdersStack = () => {
  return (
    
    <Stack.Navigator  
            initialRouteName='Orders'
            screenOptions={
                ({route}) => {
                    return {
                        header : () => <Header title='Ordenes'/>
                    }
                }
            }
        
        >
            <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>



  )
}

export default OrdersStack

const styles = StyleSheet.create({})