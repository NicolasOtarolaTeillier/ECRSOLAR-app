import React from 'react'
import { StyleSheet,  } from 'react-native'
import { DataTable } from 'react-native-paper'
const Goals = () => {
  rows = ['','LUN', 'MA','MIE','JUE','VIE']
  data = [
      {
        name: 'Metas',
        monday: '125',
        tuesday: '560',
        wednesday: '123',
        thursday: '123',
        friday: '123'

      },
    {
      name: 'Hechos',
      monday: '125',
      tuesday: '',
      wednesday: '123',
      thursday: '123',
      friday: '123'
    },
    {
      name: 'Atrasos',
      monday: '125',
      tuesday: '560',
      wednesday: '123',
      thursday: '123',
      friday: ''
    },
  ]

  return (

    <DataTable style={styles.container}>
        <DataTable.Header style={styles.tableHeader}>
        {rows.map((row, index) => {

        return <DataTable.Title numeric>{row}</DataTable.Title>
      })}
        </DataTable.Header>
        {data.map(user => {
          return (
            <DataTable.Row>
              <DataTable.Cell>{user.name}</DataTable.Cell>
              <DataTable.Cell numeric>{user.monday}</DataTable.Cell>
              <DataTable.Cell numeric>{user.tuesday}</DataTable.Cell>
              <DataTable.Cell numeric>{user.wednesday}</DataTable.Cell>
              <DataTable.Cell numeric>{user.thursday}</DataTable.Cell>
              <DataTable.Cell numeric>{user.friday}</DataTable.Cell>
            </DataTable.Row>
          )
        })}
    </DataTable>

  )
}

export default Goals


const styles = StyleSheet.create({
  container: {
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  }
})
