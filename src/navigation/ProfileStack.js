
import Header from '../Components/Header'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyProfile from '../Screens/MyProfile'
import { StyleSheet } from 'react-native'
import ImageSelector from '../Screens/ImageSelector'


const Stack = createNativeStackNavigator()

const ProfileStack = () => {
  return (
    
    <Stack.Navigator  
            initialRouteName='MyProfile'
            screenOptions={
                ({route}) => {
                    return {
                        header : () => <Header title='Perfil'/>
                    }
                }
            }
        
        >
            <Stack.Screen name="MyProfile" component={MyProfile} />
            <Stack.Screen name="ImageSelector" component={ImageSelector} />
    </Stack.Navigator>



  )
}

export default ProfileStack

const styles = StyleSheet.create({})