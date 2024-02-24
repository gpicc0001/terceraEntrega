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
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.title}>Login to start</Text>
                <InputForm 
                    style={styles.inputText}
                    label='Email'
                    value={email}
                    onChangeText = {(t) => setEmail(t)}
                    isSecure = {false}
                    error = ''    
                />
                <InputForm 
                    style={styles.inputText}
                    label='Password'
                    value={password}
                    onChangeText = {(t) => setPassword(t)}
                    isSecure={true}
                    error =''
                />
                <SubmitButton style={styles.button} onPress={onSubmit} title='Send' />
                <Text>Not have an account?</Text>
                <Pressable onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </Pressable>
            </View>
        </View>
   
   
   
   
   </>
  )
}

export default Login

const styles = StyleSheet.create({

    container:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center' 
      },
    subContainer:{
        width:'80%',
    },
    title:{
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 20
    },
    inputText:{
        borderWidth: 1, 
        borderColor:'black',
        marginBottom:20,
    },
    buttonText:{
        color:'blue'
    }
})