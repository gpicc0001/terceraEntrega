import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputForm = ({label,value,onChangeText, isSecure,error}) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput value={value} onChangeText={onChangeText} secureTextEntry={isSecure}  />
      {error ? <View><Text>{error}</Text></View> : null}
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({})