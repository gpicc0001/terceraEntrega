import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import ShopStack from './ShopStack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CartStack from './CartStack'
import { colors } from '../Global/colors'
import {Entypo} from '@expo/vector-icons'
import OrdersStack from './OrderStack'
import TabIcon from '../Components/TabIcon'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()



const TabNavigator = () => {
  return (
   <>
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle: styles.tabBar
          }}
        >
            <Tab.Screen 
              name="ShopScreen" 
              component={ShopStack}
              options={{
                tabBarIcon: ({focused}) => <TabIcon icon="shop" label ='Productos' focused={focused}/>
              }}
              
            />
            <Tab.Screen 
              name="CartStack" 
              component={CartStack}
              options={{
                tabBarIcon: ({focused}) => <TabIcon icon="shopping-cart" label ='Carrito' focused={focused}/> 
              }}
            />
            <Tab.Screen 
              name="OrdersStack" 
              component={OrdersStack}
              options={{
                tabBarIcon: ({focused}) => <TabIcon icon="list" label ='Ordenes' focused={focused}/>
              }}
            />

        </Tab.Navigator>
    </NavigationContainer>
   
   
   </>
  )
}

export default TabNavigator

const styles = StyleSheet.create({

    tabBar:{
      backgroundColor:colors.green1,
      elevation:4,
      position:'absolute',
      bottom:25,
      left:20,
      right:20,
      borderRadius:15,
      height:90,
    }


})