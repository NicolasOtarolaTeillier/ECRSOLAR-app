import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import AppStack from './AppStack'
import { AuthContext } from '../context/AuthContext'

const AppNav = () => {
  const { isLoading, userToken } = useContext(AuthContext)
  if (isLoading) {
    return (
      <View style={styles.login}>
        <ActivityIndicator size={'large'} />
      </View>
    )
  }
  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
      <StatusBar style='dark' />
    </NavigationContainer>
  )
}

export default AppNav

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    alingItems: 'center'
  }
})
