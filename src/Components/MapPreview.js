import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { googleApi } from '../firebase/googleApi'

const MapPreview = ({latitude, longitude}) => {


    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}
    &zoom=13&size=600x300&maptype=roadmap
    &markers=color:red%7Clabel:C%7C${latitude},${longitude}
    &key=${googleApi.mapStatic}`


  return (
    <View>
      <Image style={styles.image} source={latitude ? {uri: mapPreviewUrl} : require('../../assets/mapa.jpg')} />
    </View>
  )
}

export default MapPreview

const styles = StyleSheet.create({

    image:{
        width:300,
        height:300
    }
})