import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AddButton from '../Components/AddButton'
import * as ImagePicker from 'expo-image-picker';
import { useGetProfileImageQuery, usePostProfileImageMutation } from '../app/services/shopServices';
import { useSelector } from 'react-redux';

const ImageSelector = ({navigation}) => {

    const[image,setImage] = useState("")
    const [triggerProfileImage]= usePostProfileImageMutation()
    const localId = useSelector(state => state.auth.value.localId)
    const {data,isSuccess} = useGetProfileImageQuery(localId)

    useEffect(() => {
        if(isSuccess && data) setImage(data.image)

    },[isSuccess])

    const pickImage = async ()=>{

        const{granted} = await ImagePicker.requestCameraPermissionsAsync()
        if (!granted) {
            return false;
        } else {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 4],
                quality: 0.5,
                base64: true,
            });
            if (!result.canceled) {
                setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
            }
            console.log(result);
        }
    };


    const confirmImage = () => {

        triggerProfileImage({localId,image})
        navigation.goBack()

    }

  return (
    <>
        <View style={styles.container}>
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

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 40,
    },
    image: {
        width: 200,
        height: 200,
    },


})