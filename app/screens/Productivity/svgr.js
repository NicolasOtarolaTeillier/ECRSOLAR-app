import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, View, Pressable } from 'react-native'
import SvgPanZoom, { SvgPanZoomElement } from 'react-native-svg-pan-zoom'
import { Rect, Svg, Text as TextSvgNative } from 'react-native-svg'
import { Picker } from '@react-native-picker/picker'

//const xml = `` // raw SVG XML
const color_clean = 'orange'
const color_default = 'grey'
const color_stroke = 'black'
const color_text_default = 'black'
const aling_text = 'end'
const size_text = 20
const displacement_x = 40
const displacement_y = 20
const space_y = 15
const space_x = 0
const increment_y = 20
const increment_x = 3

const SvgComponent = ({ layout, clean_modules, handleAddModule, height, width}) => {

  // state
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedValue, setSelectedValue] = useState('')
  const [selectedString, setSelectedString] = useState('')
 
  // functions
  const onClick = (string) => {
    console.log(string)
    if (clean_modules.find(x => x.name === string)) {
      return
    }
    setModalVisible(true)
    setSelectedString(string)

    // Alert.alert(
    //   `String: ${string}`,
    //   'Agregar string a algun usuario?',
    //   [
    //     {
    //       text: 'No',
    //       onPress: () => console.log('Cancel Pressed'),
    //       style: 'cancel'
    //     },
    //     {
    //       text: 'Si',
    //       onPress: () => {
    //         setModalVisible(true)
    //         handleAddModule({ name: string, color: color_clean })
    //       }
    //     }
    //   ],
    //   {
    //     cancelable: true
    //   }
    // )
  }


  // render
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Text>
                {selectedString}
              </Text>
              <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
              >
                <Picker.Item label='Operario 1' value='1' />
                <Picker.Item label='Operario 2' value='2' />
                <Picker.Item label='Operario 3' value='3' />
                <Picker.Item label='Operario 4' value='4' />
              </Picker>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(false)
                  setSelectedString('')
                }}
                
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  handleAddModule({ name: selectedString, color: color_clean })
                  setModalVisible(false)
                  setSelectedString('')
                }}
              >
                <Text style={styles.textStyle}> Guardar </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Text>
        {layout.strings.reduce((sum, value) => {
          if (clean_modules.find(x => x.name == value.name) != undefined) {
            return value.columns * value.rows + sum
          } else {
            return sum
          }
        }, 0)}
      </Text>
      <Svg
      height={height}
      width={width}
      viewBox={`0 0 ${width*2} ${height*2}`}
      >
        {layout.strings.map(string => {
          return (
            <>
              <TextSvgNative
                fontSize={size_text}
                x={displacement_x + string.x + space_x}
                y={displacement_y + (string.y + 1) * space_y}
                textAnchor={aling_text}
                fill={color_text_default}
              >
                {string.name}
              </TextSvgNative>
                <Rect
                  onPressIn={() => onClick(string.name)}
                
                  key={string.name}
                  x={displacement_x + string.x + space_x}
                  y={displacement_y + string.y * space_y}
                  width={string.columns * increment_x}
                  height={string.rows * increment_y}
                  rx='1'
                  style={{
                    fill: clean_modules.find(x => x.name === string.name)
                      ? color_clean
                      : color_default,
                    stroke: color_stroke,
                    strokeWidth: '1px'
                  }}
                />
            </>
          )
        })}
      </Svg>
    </View>
  )
}
export default SvgComponent

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center'
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 100,
    //margin: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10
  },
  button: {
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 10,
    elevation: 10
  },
  buttonOpen: {
    backgroundColor: '#F194FF'
  },
  buttonClose: {
    backgroundColor: '#2196F3'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  modalText: {
    textAlign: 'center'
  }
})
