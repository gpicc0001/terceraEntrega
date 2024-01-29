import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { useSignupMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { signupSchema } from '../validations/signupSchema'




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

      if(isSuccess) dispatch(setUser(data));
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
    <View>
      <View>
        <Text>Signup</Text>
        <InputForm
          label= 'Email'
          value ={email}
          onChangeText ={(t) => setEmail(t)}
          isSecure={false}
          error={emailError}
        />
        <InputForm
          label= 'Password'
          value ={password}
          onChangeText ={(t) => setPassword(t)}
          isSecure={true}
          error={passwordError}
        />
        <InputForm
        label= 'Confirm password'
        value ={confirmPassword}
        onChangeText ={(t) => setConfirmPassword(t)}
        isSecure={true}
        error={confirmPasswordError}
        />
        <SubmitButton title="Send" onPress={onSubmit} />
        <Text>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text>login</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})