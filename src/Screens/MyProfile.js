import { StyleSheet, Text, View,Button,Image } from 'react-native'
import React from 'react'
import AddButton from '../Components/AddButton'


const MyProfile = ({navigation}) => {
  return (
    <View>
      <Image 
        source={require('../../assets/user.png')}
        style={styles.image}
        resizeMode='cover'      
      />
      <AddButton title={"Add profile picture"} onPress={()=> navigation.navigate("ImageSelector")} />
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({})