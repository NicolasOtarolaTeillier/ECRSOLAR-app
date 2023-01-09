import React from 'react'
import { StyleSheet } from 'react-native'
import { DataTable } from 'react-native-paper'
const Board = () => {
  rows = ['Operario', 'Limpios hoy', 'Meta Hoy']
  data = [
      {
        name: 'Operario 1',
        productivity_today: '125',
        goal_today: '560'
      },
    {
      name: 'Operario 2',
      productivity_today: '123',
      goal_today: '700'
    },
    {
      name: 'Operario 3',
      productivity_today: '444',
      goal_today: '800'
    },
    {
      name: 'Operario 4',
      productivity_today: '444',
      goal_today: '800'
    }
  ]

  return (

      <DataTable >
        <DataTable.Header style={styles.tableHeader}>
          {rows.map((row, index) => {
            if(row === 'Operario'){
                return <DataTable.Title sortDirection='descending'>{row}</DataTable.Title>
            }
            return <DataTable.Title numeric>{row}</DataTable.Title>
          })}
        </DataTable.Header>
        {data.map(user => {
          return (
            <DataTable.Row>
              <DataTable.Cell>{user.name}</DataTable.Cell>
              <DataTable.Cell numeric>{user.productivity_today}</DataTable.Cell>
              <DataTable.Cell numeric>{user.goal_today}</DataTable.Cell>
            </DataTable.Row>
          )
        })}
      </DataTable>
  )
}

export default Board

const styles = StyleSheet.create({
  tableHeader: {
    backgroundColor: '#DCDCDC',
  }
})
