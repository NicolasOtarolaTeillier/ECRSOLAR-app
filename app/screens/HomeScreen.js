import React, { useState, useContext } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { AuthContext } from '../context/AuthContext'
import { windowWidth } from '../utils/Dimensions'

const HomeScreen = ({ navigation }) => {
  const { logout, userInfo } = useContext(AuthContext)
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>

      <Text>{userInfo}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProductivityScreen')}
        >
        <Text style={styles.text}>Productividad</Text>
        <MaterialIcons name='arrow-forward-ios' size={25} color='#fff' />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ExtraHoursScreen')}
        >
        <Text style={styles.text}>Horas Extras</Text>
        <MaterialIcons name='arrow-forward-ios' size={25} color='#fff' />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ExpenseControlScreen')}
      >
        <Text style={styles.text}>Rinde Gastos</Text>
        <MaterialIcons name='arrow-forward-ios' size={25} color='#fff' />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => logout()}>
        <Text style={styles.text}>Salir</Text>
        <MaterialIcons name='arrow-forward-ios' size={25} color='#fff' />
      </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  )
}
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'orange',
    width: windowWidth - 50,
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20
  },
  scroll: {
    flex: 1
  }
})
