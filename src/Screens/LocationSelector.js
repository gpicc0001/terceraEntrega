import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import AddButton from '../Components/AddButton'
import * as Location from 'expo-location';
import MapPreview from '../Components/MapPreview';
import { googleApi } from '../firebase/googleApi'
import { usePostUserLocationMutation } from '../app/services/shopServices';
import { useSelector } from 'react-redux';


const LocationSelector = ({navigation}) => {
    const localId = useSelector(state => state.auth.value.localId)
    const [location, setLocation] = useState({latitude:"",longitude:""})
    const [errorMsg, setErrorMsg] = useState(null);
    const [address, setAddress] = useState('')
    const[triggerPostUserLocation, {data,isSuccess,isError,error}] = usePostUserLocationMutation()

    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation({
            latitude:location.coords.latitude,
            longitude:location.coords.longitude
            });
        //   console.log(location);

        })();
      }, []);

    useEffect(() => {
        (async() => {
            try {
                const address = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleApi.mapStatic}`)
                const data = await response.json()
                console.log(data.result[0].formatted_address);
            }catch (error) {
                setErrorMsg(error.message)
            }

        })();

    },[location])  

    useEffect(() => {

      if(isSuccess) console.log(data);
      if(isError) console.log(error)


    },[data,isSuccess,isError,error])



    const onConfirmAddress = async () =>{
      try {
        const locationFormatted = {address, ...location}
        const data = await triggerPostUserLocation({localId,locationFormatted})
        console.log(data);
        navigation.goBack()
        
      } catch (error) {
          setErrorMsg(error.message)
      }
    }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Direccion:{address}</Text>
      <MapPreview latitude={location.latitude} longitude={location.longitude} />
      <AddButton title="Confirmar localizacion" onPress={onConfirmAddress} />
    </View>
  )
}

export default LocationSelector

const styles = StyleSheet.create({

    container:{
        alignItems:"center",
        marginTop:40,
        gap:20
    },
    text:{
        fontSize:16

    }
    


})