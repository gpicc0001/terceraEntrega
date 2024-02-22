import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { useLoginMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { insertSession } from '../database'


const Login = ({navigation}) => {
    const dispatch =useDispatch()
    const[triggerLogin,{data,isError,isSuccess,error, isLoading}] = useLoginMutation()
    const[email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if(isSuccess) {
            dispatch(setUser(data))
            insertSession(data)
                .then(result => console.log(result))
                .catch(err => console.log(err))
        };
        if (isError) console.log(error);
      }, [data,isError,isSuccess])
  
  
      const onSubmit = () => {
          triggerLogin({email, password})
      }
  return (
   <>
        <View>
            <View>
                <Text>Login to start</Text>
                <InputForm 
                    label='Email'
                    value={email}
                    onChangeText = {(t) => setEmail(t)}
                    isSecure = {false}
                    error = 'Hola Mundo'    
                />
                <InputForm 
                    label='Password'
                    value={password}
                    onChangeText = {(t) => setPassword(t)}
                    isSecure={true}
                    error =''
                />
                <SubmitButton onPress={onSubmit} title='Send' />
                <Text>Not have an account?</Text>
                <Pressable onPress={() => navigation.navigate('Signup')}>
                    <Text>Sign up</Text>
                </Pressable>
            </View>
        </View>
   
   
   
   
   </>
  )
}

export default Login

const styles = StyleSheet.create({})