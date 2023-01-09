import React, {createContext, useEffect, useState} from 'react'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { apiFunction_auth } from '../src/api/functions'

export const AuthContext = createContext()

export const AuthProvider = ({children})=> {
    const [isLoading,setIsLoading] = useState(false) 
    const [userToken, setUserToken] = useState('')
    const [userInfo, setUserInfo] = useState('')

    const login = async ({email,password}) => {
        setIsLoading(true)
        const data = {
            email: email,
            password: password
        }
        const result = await apiFunction_auth(data)
        console.log('result desde authcontext:',result)
        const status = result.status 
        if(status === 200){
            const result_json = await result.json()
            setUserToken('ASDASDASGFWE238')
            await AsyncStorage.setItem('userToken', 'ASDASDASGFWE238')
            await AsyncStorage.setItem('userInfo',JSON.stringify(result_json.body))
            let userToken = await AsyncStorage.getItem('userToken')
            let userInfo = await AsyncStorage.getItem('userInfo')
            setUserToken(userToken)
            setUserInfo(userInfo)
            console.log('datos',result_json.body)
        }
        else{
            if (status === 400){
                Alert.alert('Contraseña o correo incorrecto')

            }
            else{
                Alert.alert('Error con la conexión')
                console.log('falló el inicio de session')
            }

        }
        setIsLoading(false)
    }
    const logout = async () => {
        setIsLoading(true)
        setUserToken(null)
        await AsyncStorage.clear()
        console.log('limpiando asyncStorage')
        setIsLoading(false)
    }
    const isLoggedIn = async () => {
        try{
            setIsLoading(true)
            let userToken = await AsyncStorage.getItem('userToken')
            let userInfo = await AsyncStorage.getItem('userInfo')
            console.log('user token',userToken)
            console.log('user info',JSON.parse(userInfo))
            setUserToken(userToken)
            setUserInfo(userInfo)
            setIsLoading(false)

        } catch(err){
            console.log('isLogged in error : ',err)
        }
    }
    useEffect(()=>{
        isLoggedIn()
    },[])

    return (
        <AuthContext.Provider value={{login,logout,isLoading,userToken,userInfo}}>
            {children}
        </AuthContext.Provider>
    )

}