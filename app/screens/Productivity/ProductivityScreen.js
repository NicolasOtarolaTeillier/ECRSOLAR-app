import React, { useEffect, useState } from 'react'
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import BluePrint from './blueprint'
import Board from './board'
import Goals from './goals'
import { addModule,selectModules } from '../../src/features/blueprint/blueprintSlice'
import { Layouts } from '../../utils/Constants'

const ProductivityScreen = () => {

  // redux
  const dispatch = useDispatch()

  // Blueprint
  const [layout,setLayout] = useState(Layouts.find(x=> x.name === 'Sol de Santa Ines'))
  const handleAddModule = ({name,color}) => dispatch(addModule({name:name,color:color}))
  const clean_modules = useSelector(selectModules)
  
  // Board
  const dataBoard = 'board'
  
  // Goals
  const dataGoals = 'goals'

  useEffect(() => {
    console.log('ProductivityScreen')
  }, [])

  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex:1}}>
      {/* <Text>{'usestate: ' + a}</Text>
      <Text>{'useredux' + count}</Text>
    <Button title='sumar' onPress={handle}></Button> */}
      <View style={styles.top}>
        <Board data={dataBoard} />
      </View>

      <View style={styles.middle}>
        <Goals data={dataGoals} />
      </View>

      <View style={styles.buttom}>
        <BluePrint layout={layout} clean_modules={clean_modules} handleAddModule={handleAddModule}/>
      </View>
      
    </ScrollView>
    </SafeAreaView>
  )
}
export default ProductivityScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top:{
    flex: 1,
  },
  middle:{
    flex: 1,
  },
  buttom:{
    flex: 1,
    //backgroundColor: "black"
  }
})