import React, { useEffect, useState } from 'react'
import { apiBase } from '../Api/api'
import { Navigate } from 'react-router-dom'
import LoadingSpinner from '../Components/LoadingSpinner'

const PrivateRoute = ({children}) => {

    const [response, setResponse] = useState(null)

    const checkingAuth = async()=>{
        let response = await apiBase("users/check-auth")
         console.log(response)
         if(response?.data){
            setResponse(response)
         }
    }

    useEffect(()=>{
        checkingAuth()
    },[])

if(response == null){
    return <LoadingSpinner/>
}

 if(response?.data?.authenticated){
    return children
 }

   return <Navigate to="/login" replace />

}

export default PrivateRoute