import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import AddButton from '../Components/AddButton'
import * as ImagePicker from 'expo-image-picker';

const ImageSelector = () => {

    const[image,setImage] = useState()

    const pickImage = async ()=>{

        const{granted} = await ImagePicker.requestCameraPermissionsAsync()
        if(granted){
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 4],
                quality: 0.5,
                base64:true
            })

            console.log(result);

            if(!result.canceled){
                setImage(  'data:image/jpeg;base64,' + result.assets[0].base64)
            }
            

        }

    }

    const confirmImage = () => {



    }

  return (
    <>
        <View>
            <Image 
            
                source={image ? {uri: image} : require ('../../assets/user.png')}
                style={styles.image}
                resizeMode = 'cover'
            />
            <AddButton title="Take another photo" onPress={pickImage} />
            <AddButton title="Confirm photo" onPress={confirmImage} />

        </View>
    
    
    
    
    </>
  )
}

export default ImageSelector

const styles = StyleSheet.create({})