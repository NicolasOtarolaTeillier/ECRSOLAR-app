import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, View, Pressable } from 'react-native'
import SvgPanZoom, { SvgPanZoomElement } from 'react-native-svg-pan-zoom'
import { Rect, Text as TextSvgNative } from 'react-native-svg'
import { Picker } from '@react-native-picker/picker'

//const xml = `` // raw SVG XML
const width = 800
const height = 1200
const color_clean = 'orange'
const color_default = 'grey'
const color_stroke = 'black'
const color_text_default = 'black'
const aling_text = 'end'
const size_text = 10
const displacement_x = 100
const displacement_y = 100
const space_y = 8
const space_x = 1
const increment_y = 8
const increment_x = 3

const SvgComponent = ({ layout, clean_modules, handleAddModule }) => {

  // state
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedValue, setSelectedValue] = useState('')
 
  // functions
  const onClick = () => {
    const string = evt._dispatchInstances.child.key
    console.log(string)
    if (clean_modules.find(x => x.name === string)) {
      return
    }
    setModalVisible(true)
    handleAddModule({ name: string, color: color_clean })
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
              <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
              >
                <Picker.Item label='Java' value='java' />
                <Picker.Item label='JavaScript' value='js' />
              </Picker>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}
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
      <SvgPanZoom
        canvasWidth={width}
        canvasHeight={height}
        minScale={0.2}
        maxScale={2}
        //initialZoom={0.2}
        canvasStyle={{ backgroundColor: '#ECECEC' }}
        viewStyle={{ backgroundColor: '#393636' }}
      >
        {layout.strings.map(string => {
          return (
            <>
              <TextSvgNative
                fontSize={size_text}
                x={displacement_x + string.x * space_x}
                y={displacement_y + (string.y + 1) * space_y}
                textAnchor={aling_text}
                fill={color_text_default}
              >
                {string.name}
              </TextSvgNative>
              <SvgPanZoomElement onClick={evt => onClick(evt)}>
                <Rect
                  key={string.name}
                  x={displacement_x + string.x * space_x}
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
              </SvgPanZoomElement>
            </>
          )
        })}
      </SvgPanZoom>
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
