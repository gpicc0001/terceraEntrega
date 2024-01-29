import { StyleSheet } from 'react-native'
import React from 'react'
import ShopStack from './ShopStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CartStack from './CartStack'
import { colors } from '../Global/colors'
import OrdersStack from './OrderStack'
import TabIcon from '../Components/TabIcon'
import ProfileStack from './ProfileStack'

const Tab = createBottomTabNavigator()




const TabNavigator = () => {
  return (
   <>
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
            <Tab.Screen 
              name="ProfileStack" 
              component={ProfileStack}
              options={{
                tabBarIcon: ({focused}) => <TabIcon icon="user" label ='Perfil' focused={focused}/>
              }}
            />

        </Tab.Navigator>  
   
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