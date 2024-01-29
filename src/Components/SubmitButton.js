import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SubmitButton = ({title, onPress}) => {
  return (
    <>
        <Pressable onPress={onPress}>
            <Text>{title}</Text>
        </Pressable>
    
    </>
  )
}

export default SubmitButton

const styles = StyleSheet.create({})