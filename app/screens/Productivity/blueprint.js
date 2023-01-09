import React, { useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import SvgComponent from './svgr'

const BluePrint = ({ layout, clean_modules, handleAddModule }) => {
  useEffect(() => {
    console.log('BluePrint')
  }, [])
  const width = 800
  const height = 1200
  return (
    <ScrollView style={{ flex: 1 }} horizontal={true}>
      <View style={{ flex: 1, height: height, width: width }}>
        <SvgComponent
          layout={layout}
          clean_modules={clean_modules}
          handleAddModule={handleAddModule}
          height={height}
          width={width}
        />
      </View>
    </ScrollView>
  )
}
export default BluePrint
