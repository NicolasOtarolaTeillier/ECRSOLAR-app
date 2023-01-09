import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Logo from '../assets/images/misc/logoecrsolar3.svg';
import { windowHeight,windowWidth } from '../utils/Dimensions'

const OnboardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.containerText}>
        <Text style={styles.textApp}>ECRSOLAR-APP</Text> 
      </View>
      <View style={styles.content}>
        <Logo
          height={350}
          style={{transform: [{rotate: '-45deg'}]}}
        /> 
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.letsGo}>Comencemos</Text>
        <MaterialIcons name='arrow-forward-ios' size={25} color='#fff' />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  containerText: {
    marginTop: 40
  },
  textApp: {
    // fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#20315f'
  },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: {
    backgroundColor: '#0484bc',
    padding: 20,
    width: '90%',
    borderRadius: 30,
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  letsGo: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
    // fontFamily: 'Roboto-MediumItalic'
  }
})
