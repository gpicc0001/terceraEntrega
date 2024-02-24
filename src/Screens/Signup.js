import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { useSignupMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { signupSchema } from '../validations/signupSchema'
import { insertSession } from '../database'




const Signup = ({navigation}) => {

    const dispatch =useDispatch()

    const[triggerSignup,{data,isError,isSuccess,error, isLoading}] = useSignupMutation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const[emailError, setEmailError] = useState('')
    const[passwordError, setPasswordError] = useState('')
    const[confirmPasswordError, setConfirmPasswordError] = useState('')

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
        
      try{
          signupSchema.validateSync({email,password,confirmPassword})
          triggerSignup({email, password})

      } catch (error){
          console.log(error.path);
          console.log(error.message);
          switch (error.path) {
            case "email":
              setEmailError(error.message)
              break;
            case 'password':
              setPasswordError(error.message)
              break;
            case 'confirm password':
              setConfirmPasswordError(error.messege)
            default:
              break;
          }
      }
    }

  return (
    <View style={styles.container}>
      <View style={{ width: '80%' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Signup</Text>
        <InputForm
          style={styles.input}
          label= 'Email'
          value ={email}
          onChangeText ={(t) => setEmail(t)}
          isSecure={false}
          error={emailError}
        />
        <InputForm
          style={styles.input}
          label= 'Password'
          value ={password}
          onChangeText ={(t) => setPassword(t)}
          isSecure={true}
          error={passwordError}
        />
        <InputForm
          style={styles.input}
          label= 'Confirm password'
          value ={confirmPassword}
          onChangeText ={(t) => setConfirmPassword(t)}
          isSecure={true}
          error={confirmPasswordError}
        />
        <SubmitButton style={{ marginBottom: 20 }} title="Send" onPress={onSubmit} />
        <Text style={{ marginBottom: 10 }}>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: 'blue' }}>login</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({

  container:{
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center' 
  },
  input:{
    borderWidth: 1, 
    borderColor:'black',
    marginBottom:20,

  }
})