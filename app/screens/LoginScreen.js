import React, { useContext, useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import CustomButton from '../components/CustomButton'
import InputField from '../components/InputField'
import { AuthContext } from '../context/AuthContext'

import Logo from '../assets/images/misc/logoecrsolar2.svg'
import { windowHeight, windowWidth } from '../utils/Dimensions'

import useForm from '../hooks/useForm'

const LoginScreen = ({ navigation }) => {
  
  const { login } = useContext(AuthContext)
  const initialState = {
    email: '',
    password: '',
  }
  const onSubmit = async (inputs) => {
    console.log(inputs)
    await login({ email:inputs.email.toLowerCase(), password : inputs.password.toLowerCase() })
  }
  const {subscribe, handleSubmit, inputs} = useForm(initialState,onSubmit)

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View tyle={styles.logo}>
          <Logo width={windowWidth*0.5} style={styles.logo} />
        </View>

        <Text style={styles.login}>Iniciar Sesión</Text>
        <InputField
          label={'Correo'}
          icon={
            <MaterialIcons
              name='alternate-email'
              size={20}
              color='#666'
              style={{ marginRight: 10 }}
            />
          }
          borderColor='#666'
          borderRadius='10'
          keyboardType='email-address'
          value={inputs.email}
          onChangeText={subscribe('email')}
        />
        <InputField
          label={'Contraseña'}
          icon={
            <Ionicons
              name='ios-lock-closed-outline'
              size={20}
              color='#666'
              style={{ marginRight: 10 }}
            />
          }
          inputType='password'
          value={inputs.password}
          onChangeText={subscribe('password')}
        />
        <View style={styles.button}>

        <CustomButton
          label={'Iniciar Sesión'}
          onPress={handleSubmit}
          />
          </View>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  button:{
    marginTop: 10
  },
  logo: {
    marginBottom: windowHeight*0.05

  },
  safeArea: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  content: {
    paddingHorizontal: windowWidth*0.05,
    alignItems: 'center'
  },
  login: {
    fontSize: 28,
    fontWeight: '500',
    color: '#333',
    marginBottom: 30,
    marginTop: 10,
    textAlign: 'center'
  }
})
