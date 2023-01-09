import React from 'react'
import { AuthProvider } from './context/AuthContext'
import AppNav from './navigation/AppNav'
import { Provider } from 'react-redux'
import { store } from './src/store/store'

function App () {
  console.log('desde la app')
  return (
    <Provider store={store}>
      <AuthProvider>
        <AppNav />
      </AuthProvider>
    </Provider>
  )
}
export default App
